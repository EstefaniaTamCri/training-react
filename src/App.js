// import Counter from "./components/Counter/Counter";
// import Todo from "./components/Todo/Todo";
import { createContext, useState } from "react";
import ContextExample from "./components/ContextExample/ContextExample";
import Level1 from "./components/ContextExample/Level1";
import Level2 from "./components/ContextExample/Level2";

export const MyContext = createContext(null);

const App = () => {
  const [state, setState] = useState(0);
  return (
    /* <Counter /> 
    <Todo />  */

    // <MyContext.Provider value={{saludo: "hola", dia:18}}>
    // <ContextExample/>
    // </MyContext.Provider>
    <div
      style={{
        padding: "1em",
        border: "1px solid #123",
        marginBottom: "1em",
      }}
    >
      <h1>App</h1>
      <Level1 onClick={() => setState(state + 1)} />
      <MyContext.Provider value={{ count: state, saludo:"hola", dia:18}}>
      <Level2 />
      </MyContext.Provider>
    </div>
  );
};

export default App;
