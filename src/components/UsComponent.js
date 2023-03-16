//1st Method of Using UseState ----------------------------------------------------------

// import React, { useState } from "react";

// export default function UsComponent() {
//   const myArray = useState("ahsan");
//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={() => myArray[1]("Ahsan Butt")}>UpdateArrayValue</button>
//     </div>
//   );
// }

//2nd Method of Using UseState ----------------------------------------------------------

// import React, { useState } from "react";

// export default function UsComponent() {
//   const myArray = useState("ahsan");

//   const changeState = () => {
//     myArray[1]("Abdullah Butt");
//   };

//   return (
//     <div>
//       <h1>{myArray[0]}</h1>
//       <button onClick={changeState}>UpdateArrayValue</button>
//     </div>
//   );
// }

//3rd Method of Using UseState ----------------------------------------------------------

import React, { useState } from "react";

export default function UsComponent() {
  const [name, setName] = useState("Ahsan Butt");

  let changeState = () => {
    setName("Asadullah Butt");
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={changeState}>UpdateArrayValue</button>
    </div>
  );
}
