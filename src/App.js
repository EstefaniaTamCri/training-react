// import Counter from "./components/Counter/Counter";
// import Todo from "./components/Todo/Todo";
// import ContextExample from "./components/ContextExample/ContextExample";
// import Level1 from "./components/ContextExample/Level1";
// import Level2 from "./components/ContextExample/Level2";
// import { createContext } from "react";
// import { ThemeProvider } from "./Context/ThemeContext";
// import Button from "./components/Button/Button";
import { createContext } from "react";
import Toolbar from "./components/Toolbar/Toolbar";

// export const MyContext = createContext(null);

const initialState = {
  light: {
    textColor: "#000",
    bgColor: "#f6f8fa",
  },
  dark: {
    textColor: "#fff",
    bgColor: "#222",
  },
};

const actions = {
  LIGHT: "LIGHT",
  DARK: "DARK",
};

const reducer = (state, payload) => {
  switch (payload.type) {
    case actions.LIGHT:
      return (state = initialState.light);
    case actions.DARK:
      return (state = initialState.dark);
    default:
      throw new Error();
  }
};

export const SwitchThemeContext = createContext(initialState);

const App = () => {
  // const [state, setState] = useState(0);
  return (
    /* <Counter /> 
    <Todo />  */

    // <MyContext.Provider value={{saludo: "hola", dia:18}}>
    // <ContextExample/>
    // </MyContext.Provider>
    // <div
    //   style={{
    //     padding: "1em",
    //     border: "1px solid #123",
    //     marginBottom: "1em",
    //   }}
    // >
    //   <h1>App</h1>
    //   <Level1 onClick={() => setState(state + 1)} />
    //   <MyContext.Provider value={{ count: state, saludo:"hola", dia:18}}>
    //   <Level2 />
    //   </MyContext.Provider>
    // </div>
    <div
      style={{
        padding: "1em",
      }}
    >
      {/* <ThemeProvider>
      <Button />
    </ThemeProvider> */}
      <SwitchThemeContext.Provider
        value={{initialState, reducer, actions}}
      >
        <Toolbar />
      </SwitchThemeContext.Provider>
    </div>
  );
};

export default App;
