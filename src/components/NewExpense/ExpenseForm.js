import "./ExpenseForm.css";
import { useState, useRef } from "react";

function ExpenseForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("0.00");

  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const yyyy = today.getFullYear();
  today = yyyy + "-" + mm + "-" + dd;
  const [date, setExpenseDate] = useState(today);

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }
  function handleAmountChange(e) {
    setAmount(e.target.value);
  }
  function handleExpenseDate(e) {
    setExpenseDate(e.target.value);
  }

  const inputRef = useRef(null);
  function handleSubmit(e) {
    e.preventDefault();

    const expense = {
      title: title,
      amount: Number(amount),
      date: new Date(date),
    };
    props.onSaveExpenseData(expense, "Added");

    setTitle("");
    setAmount("");
    setExpenseDate("");

    inputRef.current.focus();
  }

  // Close form
  function handleCloseForm(e) {
    e.preventDefault();
    props.onCloseForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            autoFocus
            type="text"
            onChange={handleTitleChange}
            placeholder="Title to set"
            value={title}
            ref={inputRef}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={handleAmountChange}
            value={amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={handleExpenseDate}
            value={date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={handleCloseForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
