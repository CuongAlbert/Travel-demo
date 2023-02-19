import React from "react";

import "./SearchPopUp.css";

const SearchPopUp = () => {
  return (
    // Tạo pop up
    <div className="search-popup">
      <h1>Search</h1>
      <form>
        <div>
          <label>Destination</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Check-in Date</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Options</label>
          <section>
            <label>Min price fer night</label>
            <input type="number" min="0"></input>
          </section>
          <section>
            <label>Max price fer night</label>
            <input type="number" min="0"></input>
          </section>
          <section>
            <label>Adult</label>
            <input type="number" min="0" step="1"></input>
          </section>
          <section>
            <label>Children</label>
            <input type="number" min="0" step="1"></input>
          </section>
          <section>
            <label>Room</label>
            <input type="number" min="0" step="1"></input>
          </section>
        </div>
        <button type="submit" className="search-submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchPopUp;
