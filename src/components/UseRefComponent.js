import React, { useEffect, useRef } from "react";

export default function UseRefComponent() {
  const newRef = useRef();
  const FirstName = useRef();
  const LastName = useRef();

  useEffect(() => {
    // console.log(newRef);
    // console.log(newRef.current.innerHTML);
    console.log(FirstName);
    console.log(LastName);
  });

  //   const handleHeadling = () => {
  //     newRef.current.style.color = "Red"; // to change the Color or Learning Never Ends
  //     newRef.current.style.fontFamily = "Cooper"; // To change the Font Family of Learning Never Ends
  //     newRef.current.hidden = true; // to make the DOM element Hide as he clicked on Submit Button
  //   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "Full Name = ",
      FirstName.current.value,
      LastName.current.value
    );
  };

  return (
    <div>
      <h1>UseRefComponent</h1>
      {/* <h1 ref={newRef}>Learning Never Ends</h1>
      <button onClick={handleHeadling}>Click</button> */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your First Name</label>
        <input
          type="text"
          ref={FirstName}
          placeholder="Enter Your First Name"
        />
        <br></br>
        <br></br>
        <label htmlFor="">Enter Your Last Name</label>
        <input type="text" ref={LastName} placeholder="Enter Your Last Name" />
        <br></br>
        <br></br>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}
