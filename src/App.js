import Avengers from "./components/User/Avengers";
import Terminator from "./components/Character/Terminator";
import Split from "./components/Wrapper/SplitPane";
const App = () => {
  return (
    <>
      <Split left={<Terminator />} right={<Avengers />} />
    </>
  );
};
export default App;
