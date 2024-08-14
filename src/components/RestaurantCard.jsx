const URL =
  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card">
      <img
        alt="food-image"
        loading="lazy"
        src={URL + resData.info.cloudinaryImageId}
      />

      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h3>{resData.info.avgRating + "⭐"}</h3>
      <h5>{resData.info.costForTwo}</h5>
      <h5>{resData.info.sla.deliveryTime + " mins"}</h5>
    </div>
    // modle
  );
};

export default RestaurantCard;
