import React, { memo } from "react";

function UseCallBackChild(counterTwo, setCounterTwo) {
  console.log("Child Component");
  return (
    <div>
      <h1>UseCallBackChild Component</h1>
    </div>
  );
}
export default memo(UseCallBackChild);
// memo will stop this component to re-render after any updates in Parent Component.
