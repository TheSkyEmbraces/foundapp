import React, { useState } from "react";

import "../../App.css";
import Card from "../ui/Card";
import ExpenseDate from "./ExpenseDate";

const Expenseitem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}원</div>
        </div>
      </Card>
    </li>
  );
};

export default Expenseitem;
