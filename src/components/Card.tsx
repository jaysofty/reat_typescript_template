import React, { ReactNode } from "react";

type CardVariant = "primary" | "secondary";

interface CardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  icon?: ReactNode;
  imageUrl?: string;
  footer?: ReactNode;
  variant?: CardVariant;
  width?: string; // e.g., "300px" or "30%"
  padding?: string; // e.g., "2rem"
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  icon,
  imageUrl,
  footer,
  variant = "primary",
  width = "100%",
  padding = "2rem",
}) => {
  return (
    <div style={{ width, padding }}>
      <div className={`card card--${variant}`}>
        <header
          className="card__header"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          {icon && <div className="icon-container">{icon}</div>}
          <div>
            <h3 style={{ margin: 0 }}>{title}</h3>
            {subtitle && <small style={{ opacity: 0.7 }}>{subtitle}</small>}
          </div>
        </header>

        {imageUrl && (
          <div className="card__image">
            <img
              src={imageUrl}
              alt="Card visual"
              style={{ width: "100%", borderRadius: "4px" }}
            />
          </div>
        )}

        <div className="card__body">{children}</div>

        {footer && <div className="card__footer">{footer}</div>}
      </div>
    </div>
  );
};

export default Card;
