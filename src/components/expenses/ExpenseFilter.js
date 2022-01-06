import "../../App.css";

const ExpenseFilter = (props) => {
  const selectOnChangeHandler = (e) => {
    props.onChangeFilter(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>연도를 선택하세요</label>
        <select value={props.selected} onChange={selectOnChangeHandler}>
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
