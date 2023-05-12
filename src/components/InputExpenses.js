import "./InputExpenses.css";
import { useState } from "react";
import { faCircle, faPlus } from "@fortawesome/free-solid-svg-icons";
import { classes } from "../utils/classes";
import ItemIcon from "./Items/ItemIconIcon";
import Wrapper from "./Wrappers/Wrapper";

const InputExpenses = (props) => {
  const [expense, setNewExpense] = useState({
    title: "",
    amount: 0,
    category: "incoming",
    isIncome: false,
  });
  const [visible, setVisible] = useState(false);

  const handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setNewExpense({ ...expense, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewExpense(expense);
    setNewExpense({
      title: "",
      amount: 0,
      category: "incoming",
      isIncome: false,
    });
  };
  const handleVisible = (e) => {
    e.stopPropagation();
    setVisible(!visible);
  };
  return;
  <Wrapper
    content={<form onSubmit={handleSubmit} className="new-expense">
        <ItemIcon onClick={handleVisible} icons={[faCircle, faPlus]}
        classes={classes.insurance}
        size="fa-2x" />
        <h2>Input Expense</h2>
    </form>
    }
    />
};
export default InputExpenses;
