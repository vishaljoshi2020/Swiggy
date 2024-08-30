import { URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;

  return (
    <div className="res-card p-3 bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-200 max-w-xs ml-12">
      <img
        alt="food-image"
        loading="lazy"
        src={URL + resData.info.cloudinaryImageId}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <div className="p-2">
        <h3 className="font-bold text-lg mt-2 truncate">{resData.info.name}</h3>
        <h4 className="text-gray-600 text-sm mt-1 truncate">
          {resData.info.cuisines.join(", ")}
        </h4>
        <h3 className="font-semibold text-yellow-500 text-sm mt-2">
          {resData.info.avgRating + "⭐"}
        </h3>
        <h5 className="text-gray-800 text-sm mt-1">
          {resData.info.costForTwo}
        </h5>
        <h5 className="text-gray-800 text-sm mt-1">
          {resData.info.sla.deliveryTime + " mins"}
        </h5>
      </div>
    </div>
  );
};

export const highRatingLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <h1 className="color bg-red-600 w-[129px] h-[30px] rounded-md pl-2 text-white font-bold ">
          High Rated
        </h1>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;

// in higher order component highRatingLabel see how we pass props to RestaurantCard
// we can also use higher order component in functional components
// we can also use higher order component in class components
