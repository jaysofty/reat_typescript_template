import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
  bordered?: boolean;
  flush?: boolean;
  rounded?: boolean;
  hoverable?: boolean;
}

function ListGroup({
  items,
  heading,
  onSelectItem,
  bordered = true,
  flush = false,
  rounded = true,
  hoverable = true,
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(items.length > 0 ? 0 : -1);

  // Compose dynamic class for list
  const listClass = [
    "list-group",
    flush ? "list-group-flush" : "",
    rounded ? "rounded" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="my-3">
      <h2 className="mb-3 text-primary fw-bold">{heading}</h2>
      {items.length === 0 ? (
        <p className="text-muted fst-italic">No items found</p>
      ) : (
        <ul className={listClass} role="listbox">
          {items.map((item, index) => (
            <li
              key={index}
              role="option"
              aria-selected={selectedIndex === index}
              className={
                "list-group-item d-flex justify-content-between align-items-center " +
                (selectedIndex === index ? "active" : "") +
                (hoverable ? " list-group-item-action" : "") +
                (bordered ? "" : " border-0")
              }
              style={{ cursor: "pointer", transition: "0.2s" }}
              onClick={() => {
                setSelectedIndex(index);
                onSelectItem(item);
              }}
            >
              {item}
              {selectedIndex === index && (
                <span className="badge bg-light text-dark rounded-pill">✓</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ListGroup;
