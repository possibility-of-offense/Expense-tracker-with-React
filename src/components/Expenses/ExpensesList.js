import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ filteredExpenses, expenses, filterDate }) {
  return (
    <ul className="expenses-list">
      {filteredExpenses.length > 0 ? (
        filteredExpenses.map((expense, ind) => {
          return (
            <ExpenseItem key={expense.id} expense={expense}>
              Expense by {expense.title}
            </ExpenseItem>
          );
        })
      ) : filterDate !== null ? (
        <h3 className="expenses-list__fallback">No dates available</h3>
      ) : (
        expenses.map((expense, ind) => {
          return (
            <ExpenseItem key={expense.id} expense={expense}>
              Expense by {expense.title}
            </ExpenseItem>
          );
        })
      )}
    </ul>
  );
}

export default ExpensesList;
