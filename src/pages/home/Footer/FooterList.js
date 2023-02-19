import React from "react";

const FooterList = (props) => {
  return (
    <div>
      {/* Render từng cột theo dòng bằng li */}
      {props.col_values.map((el) => (
        <li style={{ listStyle: "none", margin: "2px" }}>{el}</li>
      ))}
    </div>
  );
};

export default FooterList;
