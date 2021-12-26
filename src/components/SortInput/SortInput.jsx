import React from "react";
import { useProduct } from "../hook/ProductProvider";
import Calendar from "../Calendar/Calendar";

// const objState = {
//   date: new Date(),
//   year: new Date().getFullYear(),
//   month: new Date().getMonth(),
//   day: new Date().getDate(),
// };

export default function SortInput() {
  const {
    state,
    setState,
    inputFrom,
    setInputFrom,
    inputUntil,
    setInputUntil,
  } = useProduct();

  const handleDayClick = (date) => {
    setState({ ...state, ...{ selectedDate: date } });

    let data = `${addZero(date.getDate())}.${addZero(
      date.getMonth() + 1
    )}.${date.getFullYear()}`;
    !inputFrom ? setInputFrom(data) : setInputUntil(data);
  };

  const handleVisible = (event) => {
    event.target.parentElement.lastElementChild.className === "none"
      ? (event.target.parentElement.lastElementChild.className = "calendar")
      : (event.target.parentElement.lastElementChild.className = "none");
  };
  return (
    <div>
      <div>
        <span>c:{inputFrom}</span>
        <span className="until">по:{inputUntil}</span>
      </div>
      <button onClick={(event) => handleVisible(event)}>click</button>
      <Calendar
        handleDayClick={handleDayClick}
        setState={setState}
        state={state}
      />
    </div>
  );
}
function addZero(num) {
  if (num >= 0 && num <= 9) {
    return "0" + num;
  } else {
    return num;
  }
}
