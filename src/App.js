import Author from "./components/UI/Author";
import "./App.css";
import ExpensesItems from "./components/Expenses/ExpensesItems";
import NewExpense from "./components/NewExpense/NewExpense";

import { useState } from "react";

function App() {
  const [allExpenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      quantity: 4,
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      quantity: 2,
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      quantity: 4,
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      quantity: 4,
    },
  ]);

  const author = { name: "Ventsislav Iliev", tag: true };

  const addExpense = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };

  function filterByPrice(reset) {
    if (reset) {
      const filtered = allExpenses.sort((a, b) => a.amount - b.amount);

      setExpenses((prev) => [...filtered]);
    } else {
      const filtered = allExpenses.sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setExpenses((prev) => [...filtered]);
    }
  }

  return (
    <div>
      <div className="created">
        Created by <Author author={author} />
      </div>
      <NewExpense onAddExpense={addExpense} />

      <ExpensesItems onFilterPrice={filterByPrice} expenses={allExpenses} />
    </div>
  );
}

export default App;
