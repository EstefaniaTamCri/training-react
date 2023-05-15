import "./App.css";
import { useState } from "react";
import db from "./db/db.json";
import Expenses from "./components/Expenses";
import InputExpenses from "./components/InputExpenses";

const App = () => {
  const [expenses, setExpenses] = useState(db);

  const addNewExpense = (expense) => {
    let newExpenses = {
      category: expense.category,
      data: {
        title: expense.title,
        date: new Date(Date.now()).toLocaleDateString(), //hacemos toString para que nos devuelva un string en el formato de fecha español
      },
      money: {
        amount: expense.amount,
        income: expense.isIncome,
      },
    };
    setExpenses([...expenses, newExpenses]);
    //opcion 2
    //(prevExpenses) => {
    //return [...prevExpenses, newExpenses];
    //}; esto es igual a lo de arriba.

    //opcion 3
    //expenses.push(newExpenses);
    //return expenses;
  };
  return (
    <div className="main">
      <h1>Transaction</h1>
      <InputExpenses onNewExpense={addNewExpense} />
      <Expenses allExpenses={expenses} />
    </div>
  );
};

export default App;
