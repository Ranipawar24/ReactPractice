import "./App.css";

import { useState, React } from "react";

function App() {
  /* EXAMPLE OF USESTATE*/
  const [count, setcounter] = useState(0);
  function updateCount() {
    setcounter(count + 1);
  }
  return (
    <>
      <h1>Learning Usestate</h1>
      <h2>Button clicked {count} times </h2>
      <button onClick={updateCount}>Click Me</button>
    </>
  );
}

export default App;

/*
// like functions in js use used here as a props

// // function add(a){
//   return a+a;

// }
// addEventListener(5)

// // RULES OF HOOKS
// 1 MUST BE WRITTEN INSIDE FUNCTION COMPONENT
// 2 MUST BE IMPORT IN COMPONENT
// 3 MUST BE CALL AT TOP LEVEL OF COMP
// 4 CANNOT BE CONDITIONAL
*/
