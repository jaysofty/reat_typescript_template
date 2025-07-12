import { useState } from "react";
import Button from "./Button";

interface Props {
  children: string;
  maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars);
  return (
    <p>
      {text}...
      <Button color="secondary" onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "Less" : "Readmore"}
      </Button>{" "}
    </p>
  );
};

export default ExpandableText;
