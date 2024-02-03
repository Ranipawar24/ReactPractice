import "./App.css";
import Header from "./Components/Header";

function App() {
  const x = 10;
  return (
    <>
      /* <h1 className="x">Hello world!!</h1>
      <p>{x < 15 ? "Greater" : "Smaller"}</p>*/
      <Header name="Rani" />
      <Header name="Rani@123" />
      <Header name="Rani@2020.com" />
    </>

    // <div>
    //   <IncrimentandDecrement />
    // </div>
  );
}

export default App;

// // function add(a){
//   return a+a;

// }
// addEventListener(5)
