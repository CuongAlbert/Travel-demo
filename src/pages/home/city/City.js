import { el } from "date-fns/locale";
import "./City.css";
import CityItems from "./CityItems";

const dataCity = [
  {
    name: "Dublin",
    subText: "123 properties",
    image: "./images/city_1.webp",
  },
  {
    name: "Reno",
    subText: "533 properties",
    image: "./images/city_2.webp",
  },
  {
    name: "Austin",
    subText: "532 properties",
    image: "./images/city_3.webp",
  },
];

const City = (props) => {
  return (
    <div className="city">
      {/* Render dữ liệu từ mảng */}
      {dataCity.map((el) => (
        <CityItems name={el.name} subText={el.subText} image={el.image} />
      ))}
    </div>
  );
};

export default City;
