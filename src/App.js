import "./App.css";
// import Contador from "./components/Contador";
// import Character from "./components/Character";
// import Timer from "./components/Timer";
import Greetings from "./components/Greetings";
const App = () => {
  return (
    <div className="main">
      {/* <Contador />
      <Character /> */}
      {/* <Timer /> */}
      <Greetings name="John"/>
    </div>
  );
};

export default App;
