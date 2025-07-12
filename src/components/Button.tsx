import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "accent";
  variant?: "solid" | "outline";
  rounded?: boolean;
  centered?: boolean;
  onClick?: () => void;
  stretched?: boolean;
  type?: string;
}

const Button = ({
  children,
  type = "",
  onClick,
  centered = false,
  stretched = false,
  color = "primary",
  variant = "solid",
  rounded = false,
}: Props) => {
  const baseClass = "btn ";
  type = "submit";
  const centeredClass = centered
    ? "d-grid gap-2 col-6 mx-auto"
    : `btn-${color}`;
  const colorClass =
    variant === "outline" ? `btn-outline-${color}` : `btn-${color}`;
  const roundedClass = rounded ? "rounded-pill" : "rounded-0";
  const stretchedClass = stretched ? "w-50" : "w-auto";

  return (
    <button
      className={`${baseClass} ${colorClass} ${roundedClass} ${stretchedClass} ${centeredClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
