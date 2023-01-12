import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";

const Form = () => {
  const [person, setPerson] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [people, setPeople] = useState([]);

  const [username, setUsername] = useState("");

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setPerson({ ...person, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (person.firstName && person.email && person.message) {
      const newPerson = { ...person, id: uuidv4() };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", message: "" });
    }
  }

  return (
    <div>
      <form>
        <label>Username</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={person.firstName}
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="text"
          id="email"
          name="email"
          value={person.email}
          onChange={handleChange}
        />
        <label>Message</label>
        <input
          type="text"
          id="message"
          name="message"
          value={person.message}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <List people={people} />
    </div>
  );
};

export default Form;
