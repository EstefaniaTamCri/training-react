import Avengers from "./components/User/Avengers";
import Terminator from "./components/Character/Terminator";
import Split from "./components/Wrapper/SplitPane";
import Cards from "./components/Cards/Cards";

const App = () => {
  return (
    <>
      <Split left={<Terminator />} right={<Avengers />} />
      {}
      {/* <Cards /> */}
    </>
  );
};
export default App;
