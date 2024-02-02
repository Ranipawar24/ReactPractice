import logo from "./logo.svg";
import "./App.css";
import IncrimentandDecrement from "./Components/IncrimentandDecrement";
// import Subscription from "./Components/Subscription";

function App() {
  // let subscriptions = [
  //   {
  //     id: "1",
  //     date: new Date("2021", "03", "23"),
  //     title: "Monthly Subscription",
  //     amount: "125.60",
  //   },
  //   {
  //     id: "1",
  //     date: new Date("2021", "03", "23"),
  //     title: "Monthly Subscription",
  //     amount: "125.60",
  //   },
  // ];

  // let date = new Date("2021", "03", "23");
  // let title = "Monthly Subscription";
  // let amount = "125.60";
  return (
    <div>
      <IncrimentandDecrement />
    </div>
  );
}

export default App;
