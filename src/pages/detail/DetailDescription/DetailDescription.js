import React from "react";

import "./DetailDescription.css";

const DetailDescription = (props) => {
  return (
    <div className="detail-description">
      <div className="detail-description__des">
        <h1 className="detail-description__title">{props.title}</h1>
        <p className="detail-description__text">{props.description}</p>
      </div>
      <div className="detail-description__note">
        <h1 className="detail-description__note__title">
          Perfect for a 9-night stay!
        </h1>
        <p className="detail-description__note__text">
          Located in the real heart of Krakow, this property has an excellent
          location score of 9.8!
        </p>
        <p className="detail-description__note__price">
          <b>${props.nine_night_price}</b> (9 nights)
        </p>
        <button className="detail-description__button">
          Reserve or Book Now!
        </button>
      </div>
    </div>
  );
};

export default DetailDescription;
