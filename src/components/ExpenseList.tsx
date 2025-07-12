import { useState } from "react";
import { ExpenseFilter } from "./ExpenseFilter";
import { initialExpenses } from "../data/datas";

const ExpenseList = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleDelete = (id: number) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  };

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      <ExpenseFilter
        expense={filteredExpenses}
        onDelete={handleDelete}
        onSelectCategory={setSelectedCategory}
      />

      <div className="table-responsive">
        <table className="table table-bordered">
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
            {filteredExpenses.length === 0 ? (
              <tr>
                <td colSpan={5} className="text-center ">
                  <div className=" alert alert-info">No expenses found.</div>
                </td>
              </tr>
            ) : (
              filteredExpenses.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.description}</td>
                  <td>${item.amount.toFixed(2)}</td>
                  <td>{item.category}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td>
                $
                {filteredExpenses
                  .reduce((acc, expense) => expense.amount + acc, 0)
                  .toFixed(2)}
              </td>{" "}
              {/**acc holds the total value */}
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default ExpenseList;
