import React, { useState } from "react";

export default function UseRefComponent1() {
  const [inputValue, setInputValue] = useState();
  return (
    <div>
      UseRefComponent1
      <label htmlFor=""></label>
      <input type="text" placeholder="Enter Name" value={inputValue} />
    </div>
  );
}
