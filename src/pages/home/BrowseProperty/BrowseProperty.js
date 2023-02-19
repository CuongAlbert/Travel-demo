import React from "react";

import BrowseItem from "./BrowseItem";
import "./BrowseProperty.css";

const dataBrowse = [
  {
    name: "Aparthotel Stare Miasto",
    city: "Madrid",
    price: 120,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_1.webp",
  },
  {
    name: "Comfort Suites Airport",
    city: "Austin",
    price: 140,
    rate: 9.3,
    type: "Exceptional",
    image_url: "./images/hotel_2.jpg",
  },
  {
    name: "Four Seasons Hotel",
    city: "Lisbon",
    price: 99,
    rate: 8.8,
    type: "Excellent",
    image_url: "./images/hotel_3.jpg",
  },
  {
    name: "Hilton Garden Inn",
    city: "Berlin",
    price: 105,
    rate: 8.9,
    type: "Excellent",
    image_url: "./images/hotel_4.jpg",
  },
];

const BrowseProperty = (props) => {
  return (
    <div className="browse">
      <p className="text-browse">Home guests love?</p>
      <div className="browse-property">
        {/* Render khách sạn */}
        {dataBrowse.map((el) => (
          <BrowseItem
            name={el.name}
            city={el.city}
            price={el.price}
            rate={el.rate}
            type={el.type}
            image_url={el.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseProperty;
