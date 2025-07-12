import { useState } from "react";
import { useForm } from "react-hook-form"; // Importing React Hook Form
import { categories as initialCategories } from "../data/datas";
import Button from "./Button";

// Props type for optional parent callback
interface ExpenseFormProps {
  onSubmit?: (data: { description: string; amount: number }) => void;
}

// Data structure for a single expense entry
interface ExpenseItem {
  id: number;
  description: string;
  amount: number;
  category: string;
}

// Type of the form input fields
interface FormValues {
  description: string;
  amount: number;
  category: string;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {
  // Expense list state
  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);
  const [nextId, setNextId] = useState(1); // Used to assign unique IDs

  // Editing state
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState<number | null>(null);

  /**
   * useForm manages form state, input values, validation, and reset.
   * register → connects input to form state
   * handleSubmit → handles validation and submission
   * formState.errors → contains validation errors
   * reset → resets the form after submit or cancel
   * setValue → manually update field values (used during edit)
   */
  const {
    register,
    handleSubmit,
    formState: { errors }, // nested destructuring
    reset,
    setValue,
  } = useForm<FormValues>();

  // Main submit handler: adds or updates an expense
  const onSubmitHandler = (data: FormValues) => {
    if (isEditing && editId !== null) {
      // If editing, update the matching expense
      const updated = expenses.map((item) =>
        item.id === editId ? { ...item, ...data } : item
      );
      setExpenses(updated);
      setIsEditing(false);
      setEditId(null);
    } else {
      // Otherwise, add new expense
      const newExpense: ExpenseItem = {
        id: nextId,
        ...data,
      };
      setExpenses([...expenses, newExpense]);
      setNextId(nextId + 1);
    }

    // Optional callback to parent
    if (onSubmit)
      onSubmit({ description: data.description, amount: data.amount });

    reset(); // Reset form fields after submit
  };

  // Triggered when user clicks Edit
  const handleEdit = (item: ExpenseItem) => {
    // Populate form with existing data using setValue
    setValue("description", item.description);
    setValue("amount", item.amount);
    setValue("category", item.category);
    setIsEditing(true);
    setEditId(item.id);
  };

  // Remove an item from the expenses list
  const handleDelete = (id: number) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
    // If you were editing the deleted item, cancel editing
    if (editId === id) {
      reset();
      setIsEditing(false);
      setEditId(null);
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    reset(); // Reset form fields
    setIsEditing(false);
    setEditId(null);
  };

  return (
    <div className="container mt-4">
      {/* ======= Expense Form ======= */}
      <form
        onSubmit={handleSubmit(onSubmitHandler)} // Hook Form handles submission + validation
        className="p-3 border rounded bg-light mb-4"
      >
        {/* Description Field */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            className={`form-control input ${
              errors.description ? "is-invalid" : ""
            }`}
            {...register("description", {
              required: "Description is required.",
              minLength: 3,
            })}
          />
          {errors.description && (
            <div className="invalid-feedback">{errors.description.message}</div>
          )}
        </div>

        {/* Amount Field */}
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            id="amount"
            type="number"
            className={`form-control input ${
              errors.amount ? "is-invalid" : ""
            }`}
            {...register("amount", {
              required: "Amount is required.",
              valueAsNumber: true,
              min: { value: 0.01, message: "Amount must be greater than 0." },
            })}
          />
          {errors.amount && (
            <div className="invalid-feedback">{errors.amount.message}</div>
          )}
        </div>

        {/* Category Field */}
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            id="category"
            className={`form-select input ${
              errors.category ? "is-invalid" : ""
            }`}
            {...register("category", { required: "Please select a category." })}
          >
            <option value="">Select a category</option>
            {initialCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
          {errors.category && (
            <div className="invalid-feedback">{errors.category.message}</div>
          )}
        </div>

        {/* Submit / Update Button */}
        <Button type="submit" color={isEditing ? "warning" : "primary"}>
          {isEditing ? "Update Expense" : "Submit"}
        </Button>

        {/* Cancel Edit Button */}
        {isEditing && (
          <button
            type="button"
            className="btn btn-secondary ms-2"
            onClick={handleCancelEdit}
          >
            Cancel
          </button>
        )}
      </form>

      {/* ======= Expense List Table ======= */}
      <div className="col-md-10 mx-auto">
        {expenses.length === 0 ? (
          <div className="alert alert-info text-center">No expenses found.</div>
        ) : (
          <div className="table-responsive">
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th style={{ width: "150px" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((item, index) => (
                  <tr key={item.id}>
                    <td>{index + 1}</td>
                    <td>{item.description}</td>
                    <td>${item.amount.toFixed(2)}</td>
                    <td>{item.category}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-outline-primary me-2"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>Total</td>
                  <td>
                    $
                    {expenses
                      .reduce((acc, expense) => expense.amount + acc, 0)
                      .toFixed(2)}
                  </td>{" "}
                  {/**acc holds the total value */}
                  <td></td>
                  <td></td>
                </tr>
              </tfoot>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseForm;
