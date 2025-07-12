import React, { ReactNode } from "react";

interface CardListProps {
  children: ReactNode;
  columns?: "1" | "2" | "3"; // Preset layout
  gap?: string; // Optional custom gap
}

const CardList: React.FC<CardListProps> = ({
  children,
  columns = "3",
  gap,
}) => {
  let gridClass = "grid";

  if (columns === "2") gridClass += " grid--1x2";
  if (columns === "3") gridClass += " grid--1x3";

  return (
    <div className={gridClass} style={{ gap }}>
      {children}
    </div>
  );
};

export default CardList;
