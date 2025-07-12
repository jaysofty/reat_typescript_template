import { ReactNode } from "react";

interface AlertProps {
  type?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  children: ReactNode;
  title?: string;
  dismissible?: boolean;
  onClose?: () => void;
}

function Alert({
  type = "primary",
  children,
  title,
  dismissible = true,
  onClose,
}: AlertProps) {
  return (
    <div
      className={`alert alert-${type} ${
        dismissible ? "alert-dismissible" : ""
      } d-flex align-items-start justify-content-between`}
      role="alert"
    >
      <div>
        {title && <h4 className="alert-heading">{title}</h4>}
        <div>{children}</div>
      </div>

      {dismissible && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
        ></button>
      )}
    </div>
  );
}

export default Alert;
