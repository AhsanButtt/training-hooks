// import React, { Component } from "react";

// export default class UseEffectComponent extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       count: 0,
//     };
//   }
//   updateCount = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     return (
//       <div>
//         UseEffectComponent Is Class Based Component
//         <h1>{this.state.count}</h1>
//         <button onClick={this.updateCount}>UpdateCount</button>
//       </div>
//     );
//   }
// }

import React, { useEffect, useState } from "react";

export default function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Butt Ahsan");

  useEffect(() => {
    console.log("Running UseEffect Hook");
  }, []);

  return (
    <div>
      UseEffectComponent of Functional Component
      <br></br>
      <h1>{count}</h1>
      <h1>{name}</h1>
      <button onClick={() => setCount(count + 1)}>updateCount</button>
      <button onClick={() => setName((name = "Ahsan Butt"))}>updateName</button>
    </div>
  );
}
