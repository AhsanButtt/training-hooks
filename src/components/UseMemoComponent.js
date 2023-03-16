import React, { useMemo, useState } from "react";

export default function UseMemoComponent(props) {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const IncrementOne = () => {
    setCounterOne(counterOne + 1);
  };
  const DecrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    console.log("Is Even Function is called Here......");
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  //   const isEven = () => {
  //     console.log("Is Even Function is called Here......");
  //     let i = 0;
  //     while (i < 2000000000) i++;
  //     return counterOne % 2 === 0;
  //   };

  return (
    <div>
      UseMemoComponent
      <button onClick={IncrementOne}>counterOne {counterOne}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <button onClick={DecrementTwo}>counterTwo {counterTwo}</button>
    </div>
  );
}
