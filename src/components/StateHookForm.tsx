// form using state hook

import { FormEvent, useState } from "react";
import Button from "./Button";

const Form = () => {
  //create a person object with two properties

  const [person, setPerson] = useState({
    name: "",
    age: "",
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      {/**htmlFor attributes ensures the label gets focused wen clicked */}
      <div className="form-group">
        <label htmlFor="" className="form-label form_labe_p">
          Name
        </label>
        {/* Update state variables with onchange event handler anytime a user types in the input field */}
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          type="text"
          className="input form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          onChange={(e) => setPerson({ ...person, age: e.target.value })}
          value={person.age}
          id="age"
          type="number"
          className="input form-control"
        />
      </div>

      <Button type="submit" color="primary" stretched>
        Submit
      </Button>
    </form>
  );
};

export default Form;
