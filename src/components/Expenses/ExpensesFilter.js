import React, { useState } from "react";
import Button from "../UI/Button";

import "./ExpensesFilter.css";
import "./ExpenseItem.css";

const ExpensesFilter = (props) => {
  // const [selected, setSelected] = useState("2020");
  const [selected, setSelected] = useState("2020");
  const [title, setTitle] = useState("Filter by price");
  const [showRestoreButton, setShowRestoreButton] = useState(false);

  function handleSelectedDate(e) {
    setSelected((prev) => (prev = e.target.value));
    props.onSetFilterDate(e.target.value);
    props.onToggleShowAllExpensesChart(false);

    setShowRestoreButton(true);
  }

  function checkStateValue(state, value) {
    if (state.includes(value)) {
      return true;
    }
    return false;
  }

  function handleFilterByPrice() {
    if (checkStateValue(title, "price")) {
      props.onFilterPrice(true);
    } else {
      props.onFilterPrice(false);
    }

    setTitle((prev) =>
      checkStateValue(prev, "price")
        ? (prev = "Filter by name")
        : (prev = "Filter by price")
    );
  }

  function handleRestoreExpenses() {
    props.onSetFilterDate(null);
    props.onSetFilteredExpenses((prev) => []);
    props.onToggleShowAllExpensesChart(true);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <div className="filtering">
          <label>Filter by year</label>
          <Button
            styling={{ width: "200px" }}
            onClick={handleFilterByPrice}
            className="expense-item__price"
          >
            {title}
          </Button>
        </div>
        {props.date ? (
          <p>Currently selected date: {props.date}</p>
        ) : (
          <p>No date selected</p>
        )}
        <div>
          <select value={selected} onChange={handleSelectedDate}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
          <br />
          {showRestoreButton && (
            <Button onClick={handleRestoreExpenses} className="restore">
              Restore all expenses
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpensesFilter;
