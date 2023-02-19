import React from "react";

import "./DetailInfo.css";

const DetailInfo = (props) => {
  return (
    <div className="detail-info">
      <div>
        <h1 className="detail-info__name">{props.name}</h1>
        <section className="detail-info__address">
          <i className="fa fa-map-marker"></i> <p>{props.address}</p>
        </section>
        <p className="detail-info__distance">{props.distance}</p>
        <p className="detail-info__price">{props.price}</p>
      </div>
      <button className="detail-info__button">Reserve or Book Now!</button>
    </div>
  );
};

export default DetailInfo;
