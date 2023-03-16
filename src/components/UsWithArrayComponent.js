import React, { useState } from "react";

export default function UsWithArrayComponent() {
  let num = [1, 2, 3, 4, 5];
  let [numbers, setNumbers] = useState(num);

  let changeArrayValues = () => {
    setNumbers([11, 22, 33, 44, 55]);
  };

  let addArraysValues = () => {
    setNumbers((previousState) => {
      return [previousState, Math.floor(Math.random() * 50)];
    });
  };

  return (
    <div>
      <ul>
        {numbers.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
      <button onClick={changeArrayValues}>UpdateArrayValues</button>

      <button onClick={addArraysValues}>AddValuesInArray</button>
      <h1>UsWithArrayComponent</h1>
    </div>
  );
}
