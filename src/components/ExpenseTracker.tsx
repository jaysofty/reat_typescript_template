import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define Zod schema
const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters." }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, { message: "You must be at least 18 years old." }),
  city: z.string().min(2, { message: "City is required." }),
  state: z.string().min(2, { message: "Please select a state." }),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onTouched", // Show errors after field is touched
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
    alert("Form submitted successfully!");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Expense Tracker</h2>
      <div className="row">
        {/* Form Section */}
        <div className="col-md-6 mb-4">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            {/* Name Field */}
            <div className="mb-3">
              <input
                {...register("name")}
                type="text"
                className={`form-control input ${
                  errors.name ? "is-invalid" : ""
                }`}
                id="name"
                placeholder="Enter your name"
              />
              {errors.name && (
                <div className="invalid-feedback">{errors.name.message}</div>
              )}
            </div>

            {/* Age Field */}
            <div className="mb-3">
              <input
                {...register("age", { valueAsNumber: true })}
                type="number"
                className={`form-control input ${
                  errors.age ? "is-invalid" : ""
                }`}
                id="age"
                placeholder="Enter your age"
              />
              {errors.age && (
                <div className="invalid-feedback">{errors.age.message}</div>
              )}
            </div>

            {/* City Field */}
            <div className="mb-3">
              <input
                {...register("city")}
                type="text"
                className={`form-control input  ${
                  errors.city ? "is-invalid" : ""
                }`}
                id="city"
                placeholder="Enter your city"
              />
              {errors.city && (
                <div className="invalid-feedback">{errors.city.message}</div>
              )}
            </div>

            {/* State Field */}
            <div className="mb-4">
              <select
                {...register("state")}
                id="state"
                className={`form-select input ${
                  errors.state ? "is-invalid" : ""
                }`}
              >
                <option value="">Choose...</option>
                <option value="Lagos">Lagos</option>
                <option value="Abuja">Abuja</option>
                <option value="Kano">Kano</option>
              </select>
              {errors.state && (
                <div className="invalid-feedback">{errors.state.message}</div>
              )}
            </div>

            <button
              disabled={!isValid}
              className="btn btn-primary"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Table Section */}
        <div className="col-md-6">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>First</th>
                <th>Last</th>
                <th>Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th>2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;
