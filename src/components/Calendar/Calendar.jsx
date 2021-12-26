import React, { useState } from "react";
import "./Calendar.sass";
import * as calendar from "../hook/calendar";

const defaultData = {
  years: [2017, 2018, 2019, 2020, 2021, 2022],
  monthNames: [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ],
  weekDayNames: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
};
const objState = {
  date: new Date(),
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  day: new Date().getDate(),
};

function Calendar({ handleDayClick }) {
  const [state, setState] = useState(objState);
  const [selectMonth, setSelectMonth] = useState(state.month);
  const [selectYear, setSelectYear] = useState(state.year);

  const { years, monthNames, weekDayNames } = defaultData;
  const monthData = calendar.getMonthData(selectYear, selectMonth);

  const handleSelectChangeMonth = (event) => {
    setSelectMonth(event.target.value);
    const date = new Date(selectYear, event.target.value);
    setState({ date });
  };

  const handleSelectChangeYear = (event) => {
    setSelectYear(event.target.value);
    const date = new Date(event.target.value, selectMonth);
    setState({ date });
  };

  return (
    <>
      <div className="none">
        <header>
          <select value={selectMonth} onChange={handleSelectChangeMonth}>
            {monthNames.map((name, index) => (
              <option key={name} value={index}>
                {name}
              </option>
            ))}
          </select>
          <select value={selectYear} onChange={handleSelectChangeYear}>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </header>
        <table>
          <thead>
            <tr>
              {weekDayNames.map((name) => (
                <th key={name}>{name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {monthData.map((week, index) => (
              <tr key={index} className="week">
                {week.map((date, index) =>
                  date ? (
                    <td
                      key={index}
                      className="day"
                      onClick={() => handleDayClick(date)}
                    >
                      {date.getDate()}
                    </td>
                  ) : (
                    <td key={index} />
                  )
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Calendar;
