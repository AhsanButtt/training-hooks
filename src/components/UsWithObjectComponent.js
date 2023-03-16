import React, { useState } from "react";

export default function UsWithObjectComponent() {
  const obj = {
    name: "Akbar Ali",
    age: 29,
    height: 6.5,
    isYoung: true,
  };
  const [person, setPerson] = useState(obj);

  let changeStateOfObject = () => {
    setPerson({
      name: "Shoaib Akhtar",
      age: 99,
      height: 5.1,
      isYoung: false,
    });
  };

  // To Update only One Property of an Object we have to Use SPREAD OPERATOR
  // ... three dots is spread operator
  let changeStateWithSpreadOperator = () => {
    setPerson((previousState) => {
      return {
        ...previousState,
        name: "Ahsan ",
      };
    });
  };

  return (
    <div>
      <h1>{person.name}</h1>
      <h1>{person.age}</h1>
      <h1>{person.height}</h1>
      <h1>{person.isYoung.toString()}</h1>
      <button onClick={changeStateOfObject}>UpdateObjectValues</button>

      <button onClick={changeStateWithSpreadOperator}>UpdateNameOnly</button>
    </div>
  );
}
