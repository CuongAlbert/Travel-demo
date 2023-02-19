import React from "react";

import Navbar from "../home/navbar/Navbar";
import Footer from "../home/Footer/Footer";
import SearchPopUp from "./SearchPopUp/SearchPopUp";
import SearchList from "./SearchList/SearchList";

const Search = () => {
  return (
    <div>
      <Navbar />
      {/* Tạo kiểu inline cho trang Search */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "25% 75%",
          gap: "20px",
          width: "60vw",
          margin: "0 auto",
        }}
      >
        <SearchPopUp />
        <SearchList />
      </div>
      <Footer />
    </div>
  );
};

export default Search;
