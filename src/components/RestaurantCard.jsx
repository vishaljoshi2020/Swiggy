const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img alt="food-image" loading="lazy" src={resData.image} /> 

      <h3>{resData.name}</h3>
      <h4>{resData.cuisines.join(", ")}</h4>
      <h3>{resData.avgRating + "⭐"}</h3>
    </div>
  );
};

export default RestaurantCard;
