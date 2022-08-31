import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpensesItems.css";

import { useState, useEffect } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpensesItems({ expenses, onFilterPrice }) {
  const [filterDate, setFilterDate] = useState("2020");
  const [filteredExpenses, setFilteredExpenses] = useState([]);

  useEffect(() => {
    if (filterDate) {
      setFilteredExpenses((prev) => {
        const filtered = expenses.filter(
          (el) => el.date.getFullYear() === Number(filterDate)
        );
        if (filtered.length) {
          return filtered;
        } else {
          return [];
        }
      });
    }
  }, [filterDate, expenses]);

  return (
    <Card className="expenses">
      <div>
        <ExpensesFilter
          onFilterPrice={onFilterPrice}
          onSetFilterDate={setFilterDate}
          date={filterDate}
          onSetFilteredExpenses={setFilteredExpenses}
        />
      </div>
      <br />
      <ExpensesChart expenses={filteredExpenses} date={filterDate} />
      <br />
      <ExpensesList
        expenses={expenses}
        filteredExpenses={filteredExpenses}
        filterDate={filterDate}
      />
    </Card>
  );
}

export default ExpensesItems;
