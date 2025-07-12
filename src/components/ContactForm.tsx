// contact form using the ref hook

import React, { useEffect, useState } from "react";
import Button from "./Button";
import SpinnerComponent from "./Spinner";

interface FormData {
  email: string;
  // password: string;
  checked: boolean;
  message: string;
}

interface Errors {
  email?: string;
  password?: string;
  message?: string;
}

interface ContactFormProps {
  onSubmit: (data: FormData) => void;
  submitLabel?: string;
  showCheckbox?: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  submitLabel = "Submit",
  showCheckbox = true,
}) => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    // password: "",
    checked: false,
    message: "",
  });

  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<string | null>(null);

  useEffect(() => {
    // Simulate data fetch
    setTimeout(() => {
      setData("Hello, world!");
      setLoading(false);
    }, 2000);
  }, []);

  const validate = () => {
    const newErrors: Errors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    // if (!formData.password) {
    //   newErrors.password = "Password is required.";
    // } else if (formData.password.length < 6) {
    //   newErrors.password = "Password must be at least 6 characters.";
    // }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]:
        type === "checkbox" && e.target instanceof HTMLInputElement
          ? e.target.checked
          : value,
    }));
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id } = e.target;
    setTouched((prev) => ({ ...prev, [id]: true }));
    validate();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData);

      setFormData({
        email: "",
        // password: "",
        checked: false,
        message: "",
      });
      setTouched({});
      setErrors({});
      //setLoading(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          id="email"
          className={`input form-control ${
            touched.email && errors.email ? "is-invalid" : ""
          }`}
          value={formData.email}
          onChange={handleChange}
          required
          onBlur={handleBlur}
        />
        <div className="form-text">
          We'll never share your email with anyone else.
        </div>
        {touched.email && errors.email && (
          <div className="invalid-feedback">{errors.email}</div>
        )}
      </div>

      {/* Password Field */}
      {/* <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`input ${
            touched.password && errors.password ? "is-invalid" : ""
          }`}
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.password && errors.password && (
          <div className="invalid-feedback">{errors.password}</div>
        )}
      </div> */}

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          className={`form-control input ${
            touched.message && errors.message ? "is-invalid" : ""
          }`}
          rows={4}
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
          placeholder="Enter your message"
        />
        {touched.message && errors.message && (
          <div className="invalid-feedback d-block">{errors.message}</div>
        )}
      </div>

      {touched.message && errors.message && (
        <div className="invalid-feedback">{errors.message}</div>
      )}
      {/* Optional Checkbox */}
      {showCheckbox && (
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            id="checked"
            className="form-check-input"
            checked={formData.checked}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="checked">
            Check me out
          </label>
        </div>
      )}

      {/* Submit */}
      {loading ? (
        <SpinnerComponent />
      ) : (
        <Button color="primary">{submitLabel}</Button>
      )}
    </form>
  );
};

export default ContactForm;
