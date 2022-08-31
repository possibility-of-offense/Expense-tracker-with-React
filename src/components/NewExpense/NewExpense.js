import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

import { useState } from "react";

function NewExpense(props) {
  const saveExpenseDataHandler = (obj, msg) => {
    const expenseData = {
      ...obj,
      quantity: 1,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    hideNewExpensesForm();
  };

  const [showForm, onSetToggleShowForm] = useState(true);

  const showNewExpensesForm = () => {
    onSetToggleShowForm(true);
  };

  const hideNewExpensesForm = () => {
    onSetToggleShowForm(false);
  };

  return (
    <div className="new-expense">
      {showForm ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCloseForm={hideNewExpensesForm}
        />
      ) : (
        <button onClick={showNewExpensesForm}>Add New Expense</button>
      )}
    </div>
  );
}

export default NewExpense;
