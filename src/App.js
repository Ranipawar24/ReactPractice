import logo from "./logo.svg";
import "./App.css";

function App() {
  const x = 10;
  return (
    <>
      <h1 className="x">Hello world!!</h1>
      <p>{x < 15 ? "Greater" : "Smaller"}</p>
    </>

    // <div>
    //   <IncrimentandDecrement />
    // </div>
  );
}

export default App;
