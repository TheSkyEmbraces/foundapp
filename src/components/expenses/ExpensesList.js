import "../../App.css";
import Expenseitem from "./Expenseitem";

const ExpensesList = (props) => {
  let expensesContent = <p>지출 내역이 없습니다</p>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">{expensesContent}</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <Expenseitem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
