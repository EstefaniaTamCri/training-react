import { useState } from "react";
import "./App.css";
import db from "./db/db.json";
import Expenses from "./components/Expenses";
import InputExpenses from "./components/InputExpenses";

function App() {
  const [expenses, setNewExpense] = useState(db);

  const addNewExpense = (expense) => {
    let newExpense = {
      category: expense.category,
      data: {
        title: expense.title,
        date: new Date(Date.now()).toLocaleDateString(),
      },
      money: {
        amount: expense.amount,
        income: expense.isIncome,
      },
    };
    setNewExpense((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };

  return (
    <div className="main">
      <h1>Transactions</h1>
      <InputExpenses onNewExpense={addNewExpense} />
      <Expenses allExpenses={expenses} />
    </div>
  );
}

export default App;
