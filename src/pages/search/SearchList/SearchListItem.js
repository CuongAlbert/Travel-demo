import React from "react";

import "./SearchListItem.css";

const SearchListItem = (props) => {
  //tạo class 'hidden' để hiển thị dòng free-cancel
  let freeCancel = "";
  if (!props.free_cancel) {
    freeCancel = "hidden";
  }
  return (
    <div className="search-list-item">
      <img className="search-list-item__image" src={props.image_url} />
      <div className="search-list-item__infomation">
        <h3>{props.name}</h3>
        <p>{props.distance} from center</p>
        <p className="search-list-item__tag">{props.tag}</p>
        <p className="search-list-item__description">{props.description}</p>
        <p className="search-list-item__type">{props.type}</p>
        <section className={`search-list-item__freecancel ${freeCancel}`}>
          <p className="cancel">Free cancellation</p>
          <p className="note">
            You can cancel later, so look in this great price today!
          </p>
        </section>
      </div>
      <div className="search-list-item__comment">
        <div className="search-list-item__mark">
          <h3 className="search-list-item__mark__rate-text">
            {props.rate_text}
          </h3>
          <div className="search-list-item__mark__rate">{props.rate}</div>
        </div>
        <div className="search-list-item__price">
          <p className="search-list-item__price__price">${props.price}</p>
          <p className="search-list-item__price__tax">
            Includes taxes and fees
          </p>
          <button className="search-list-item__price__button">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchListItem;
