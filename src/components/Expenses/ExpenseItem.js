import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Author from "../UI/Author";
import Card from "../UI/Card";
import Badge from "../UI/Badge";
import { useState, useRef } from "react";
import Button from "../UI/Button";

// https://flaviocopes.com/how-to-get-month-from-javascript-date/

function ExpenseItem(props, context) {
  const { expense } = props;
  const author = {
    name: "Ventsislav Iliev",
  };

  // Hooks
  const [title, setTitle] = useState(props.expense.title);
  const [showDialog, setShowDialog] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const divRef = useRef(null);

  // Handlers
  function handleShowPopup(e) {
    setShowDialog((prev) => !prev);
  }

  function handleChangingTitle(e) {
    setTitle((prev) => (prev = e.target.value));
  }

  function handleAddingClasses(e) {
    if (!divRef.current.parentElement.classList.contains("light-bg")) {
      divRef.current.parentElement.classList.add("light-bg");
    }
  }

  function handleRemovingClasses(e) {
    if (divRef.current.parentElement.classList.contains("light-bg")) {
      divRef.current.parentElement.classList.remove("light-bg");
    }
  }

  function handleToggleShowBadge() {
    if (expense.amount > 500) {
      setShowBadge((prev) => !prev);
    }
  }

  const btnChangeTitle = {
    backgroundColor: "skyblue",
    border: "none",
    cursor: "pointer",
    padding: "6px 10px",
    display: "block",
    fontSize: "12px",
    fontWeight: "bold",
  };

  const btnQuantity = {
    backgroundColor: "#fff",
    padding: "5px 10px",
    border: "none",
    borderRadius: "5px",
  };

  return (
    <li>
      <Card
        onMouseEnter={handleToggleShowBadge}
        onMouseLeave={handleToggleShowBadge}
        className={`expense-item ${expense.amount > 500 ? "red-bg" : ""}`}
      >
        {showBadge && <Badge>Too high expense</Badge>}
        <ExpenseDate date={expense.date} />
        <div
          onMouseEnter={handleAddingClasses}
          onMouseLeave={handleRemovingClasses}
          title={props.children[1]}
          className="expense-item__description"
          ref={divRef}
        >
          <h2>{title}</h2>
          <div className="expense-item__price">${expense.amount}</div>
          <Card radius="medium" className="expense-item__quantity">
            <Button styling={btnQuantity}>Quantity: {expense.quantity}</Button>
          </Card>
        </div>
        <Author author={author}>Expense of</Author>
        &nbsp;
        <Card radius="medium">
          <Button styling={btnChangeTitle} onClick={handleShowPopup}>
            Change title
          </Button>
          {/* <button onClick={handleShowPopup}>Change title</button> */}
        </Card>
        {showDialog && (
          <Card radius="medium" className="popup-dialog">
            <div>
              <h5>Set new title</h5>
              <form>
                <input
                  type="text"
                  value={title}
                  autoFocus
                  onChange={handleChangingTitle}
                />
              </form>
            </div>
          </Card>
        )}
      </Card>
    </li>
  );
}

export default ExpenseItem;
