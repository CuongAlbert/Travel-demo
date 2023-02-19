import React from "react";
import { isCompositeComponent } from "react-dom/test-utils";

import PropertyTypeItem from "./PropertyTypeItem";
import "./PropertyType.css";

const dataType = [
  {
    name: "Hotels",
    count: 233,
    image: "./images/type_1.webp",
  },
  {
    name: "Apartments",
    count: 2331,
    image: "./images/type_2.jpg",
  },
  {
    name: "Resorts",
    count: 2331,
    image: "./images/type_3.jpg",
  },
  {
    name: "Villas",
    count: 2331,
    image: "./images/type_4.jpg",
  },
  {
    name: "Cabins",
    count: 2331,
    image: "./images/type_5.jpg",
  },
];

const PropertyType = (props) => {
  return (
    <div className="type">
      <p className="type-text">Browse by property type</p>
      <div className="type-property">
        {/* Render loại khách sạn */}
        {dataType.map((el) => (
          <PropertyTypeItem name={el.name} count={el.count} image={el.image} />
        ))}
      </div>
    </div>
  );
};

export default PropertyType;
