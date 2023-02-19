import React from "react";

import "./BrowseItem.css";

const BrowseItem = (props) => {
  return (
    <div className="browse-item">
      <img className="browse-image" src={props.image_url} />
      <a className="browse-name" href="/detail">
        {props.name}
      </a>
      <p className="browse-city">{props.city}</p>
      <p className="browse-price">Starting from {props.price}$</p>
      <div className="browse-feedback">
        <span className="browse-rating">{props.rate}</span>
        <span className="browse-comment">{props.type}</span>
      </div>
    </div>
  );
};

export default BrowseItem;
