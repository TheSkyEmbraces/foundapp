import React, { useState } from "react";
import "../../App.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0.01);
  const [date, setDate] = useState("");

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseDate = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseDate);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>지출 이름</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>가격</label>
          <input type="number" value={amount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>날짜</label>
          <input
            type="date"
            value={date}
            max="2050-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          취소하기
        </button>
        <button type="submit">추가하기</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
