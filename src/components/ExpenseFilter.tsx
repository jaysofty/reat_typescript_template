import { categories } from "../data/datas";

interface ExpenseItem {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  onSelectCategory: (category: string) => void;
  onDelete: (id: number) => void;
  expense: ExpenseItem[];
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select input mb-3"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};
