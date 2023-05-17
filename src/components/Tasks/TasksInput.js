import classes from "./TasksInput.module.css";
import SubmitButton from "../UI/Button/SubmitButton";

const TasksInput = (props) => {
  return (
    <form action="">
      <div>
        <label htmlFor="new-task">
          <h2>Post a Task</h2>
        </label>
        <input type="text" id="new-task" />
        <SubmitButton type="subit" >Save </SubmitButton>
      </div>
    </form>
  );
};
export default TasksInput;
