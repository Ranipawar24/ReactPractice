import "./App.css";
import Header from "./Components/Header";

function App() {
  const x = 10;
  return (
    <>
      <h1 className="x">Hello world!!</h1>
      <p>{x < 15 ? "Greater" : "Smaller"}</p>
      <Header />
    </>

    // <div>
    //   <IncrimentandDecrement />
    // </div>
  );
}

export default App;
