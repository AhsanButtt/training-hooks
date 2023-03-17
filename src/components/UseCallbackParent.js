import React, { useCallback, useState } from "react";
import UseCallbackChild from "./UseCallbackChild";

export default function UseCallbackParent() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState([]);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
    console.log(counterOne);
    console.log("Parent Component Counter Event is clicked");
  };

  const fun = useCallback(() => {
    console.log("Hello");
  }, counterTwo);
  return (
    <div>
      <h1>
        <UseCallbackChild counterTwo={counterTwo} fun />
        <button onClick={IncrementOne}>CounterOne</button>
      </h1>
    </div>
  );
}
