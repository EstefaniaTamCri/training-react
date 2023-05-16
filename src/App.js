import data from "./mockedDB/tasks.json";
import { useState } from "react";
import classes from "./App.module.css";
import TasksInput from "./components/Tasks/TasksInput";
// import TaskList from "./components/Tasks/TaskList";
// import Item from "./components/Tasks/Item";

const App = () => {
  const [tasks, setTasks] = useState(data);
  return (
    <main>
      <section>
        <TasksInput/>
      </section>
      <section>{}</section>
    </main>
  );
};

export default App;