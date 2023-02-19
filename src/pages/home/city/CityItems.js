import "./CityItems.css";

const CityItems = (props) => {
  return (
    <div className="city-item">
      <img className="image" src={props.image} />
      <div className="text">
        <div className="name">{props.name}</div>
        <div className="subtext">{props.subText}</div>
      </div>
    </div>
  );
};

export default CityItems;
