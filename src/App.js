import { useState } from "react";
import "./App.css";
import Expense from "./components/expenses/Expense";
import NewExpense from "./components/newExpense/NewExpense";
import Data from "./util/data.js";

const App = () => {
  const [data, setData] = useState(Data);
  console.log(data);

  const addExpenseHandler = (expense) => {
    setData((prevData) => {
      return [expense, ...prevData];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={data} />
    </div>
  );
};

export default App;
