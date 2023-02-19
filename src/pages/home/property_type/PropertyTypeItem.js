import React from "react";

import "./PropertyTypeItem.css";
const PropertyTypeItem = (props) => {
  return (
    <div className="type-item">
      <img className="type-image" src={props.image} />
      <p className="type-name">{props.name}</p>
      <p className="type-count">{props.count} hotels</p>
    </div>
  );
};

export default PropertyTypeItem;
