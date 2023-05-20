// import Counter from "./components/Counter/Counter";
import Todo from "./components/Todo/Todo";
import { TaskProvider } from "./Context/TaskContext";
// import ContextExample from "./components/ContextExample/ContextExample";
// import Level1 from "./components/ContextExample/Level1";
// import Level2 from "./components/ContextExample/Level2";
// import { createContext } from "react";
// import { ThemeProvider } from "./Context/ThemeContext";
// import Button from "./components/Button/Button";

// import Toolbar from "./components/Toolbar/Toolbar";
// import { SwitchThemeProvider } from "./Context/SwitchThemeContext";

// export const MyContext = createContext(null);



const App = () => {
  // const [state, setState] = useState(0);
  return (
    /* <Counter /> */
    <TaskProvider>
    <Todo />
    </TaskProvider>

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
    // <div
    //   style={{
    //     padding: "1em",
    //   }}
    // >
    //   <ThemeProvider>
    //   <Button />
    // </ThemeProvider>
    //   <SwitchThemeProvider>
    //     <Toolbar />
    //   </SwitchThemeProvider>
    // </div>
  );
};

export default App;
