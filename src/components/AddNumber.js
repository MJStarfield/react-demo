import { useState } from "react";

const AddNumber = () => {
  const [number, setNumber] = useState(0);

  function addNumber() {
    setNumber(number + 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => addNumber()}>Test button</button>
    </>
  );
};

export default AddNumber;
