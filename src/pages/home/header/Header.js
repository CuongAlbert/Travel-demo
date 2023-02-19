import React, { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import "./Header.css";

// Hàm convert giá trị từ state sang string value để hiển thị vào ô Input
const renderDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

const Header = () => {
  const [isClose, setIsClose] = useState(true);
  const [inputValue, setInputValue] = useState("");
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // dùng để bắt giá trị inputValue theo state
  useEffect(() => {
    state[0] !== "null" &&
      setInputValue(
        `${renderDate(state[0].startDate)} to ${renderDate(state[0].endDate)}`
      );
  }, [state]);

  // Event bật tắt cửa sổ Calendar khi click vào ô Input
  const handleClickCloseCalendar = () => {
    isClose ? setIsClose(false) : setIsClose(true);
  };

  // hàm onChange để render Date Range
  const changeHandle = (item) => {
    setState([item.selection]);
    setInputValue(
      `${renderDate(state[0].startDate)} to ${renderDate(state[0].endDate)}`
    );
  };

  return (
    <div className="home">
      <div className="header">
        <h1>A lifetime of discounts? It's Genius.</h1>
        <p>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free account
        </p>
        <button className="button">Sign in / Register</button>
        <form className="header-form">
          <section>
            <i className="fa fa-bed"></i>
            <input type="text" placeholder="Where are you going?"></input>
          </section>
          <section>
            <i className="fa fa-calendar"></i>
            <input
              type="text"
              placeholder="Date"
              onClick={handleClickCloseCalendar}
              value={inputValue}
            ></input>
          </section>
          {/* sử dụng Date Range theo mẫu */}
          {!isClose && (
            <DateRange
              editableDateInputs={true}
              onChange={changeHandle}
              moveRangeOnFirstSelection={false}
              ranges={state}
              className="date"
              minDate={new Date()}
            />
          )}
          <div className="number">
            <i className="fa fa-male"></i>
            <input
              type="text"
              placeholder="adult - 0 children - 0 room"
            ></input>
          </div>
          <section
            type="button"
            className="search"
            // Event chuyển sang trang Search
            onClick={() => window.location.replace("/search")}
          >
            Search
          </section>
        </form>
      </div>
    </div>
  );
};

export default Header;
