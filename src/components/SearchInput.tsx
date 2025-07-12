import React, { useState, FormEvent } from "react";
import { FiSearch } from "react-icons/fi";
import Button from "./Button";

interface DomainSearchInputProps {
  placeholder?: string;
  buttonLabel?: string;
  onSearch: (value: string) => void;
  iconHref?: string;
}

const DomainSearchInput: React.FC<DomainSearchInputProps> = ({
  placeholder = "Enter domain name here...",
  buttonLabel = "Search",

  onSearch,
}) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <form className=" input-group " onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control input"
        placeholder={placeholder}
        required
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        rounded
        onClick={() => handleSubmit}
        color="danger"
        centered={false}
        stretched={false}
      >
        {" "}
        <FiSearch className="me-2" />
        {buttonLabel}
      </Button>
    </form>
  );
};

export default DomainSearchInput;
