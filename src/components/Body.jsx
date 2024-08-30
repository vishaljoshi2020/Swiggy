import RestaurantCard, { highRatingLabel } from "./RestaurantCard";
import resImages from "../utils/mockData"; // Make sure mockData contains the resImages array
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const HighRating = highRatingLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setfilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  const isOnline = useOnlineStatus();
  if (isOnline === false) {
    return <h1>Please check your internet connection</h1>;
  }

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex flex-col sm:flex-row items-center justify-between p-4 ">
        <div className="search flex items-center space-x-2 mb-4 sm:mb-0">
          <input
            type="search"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => {
              const filteredList = listofRestaurants.filter((item) => {
                return item.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurants(filteredList);
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all duration-200">
            Search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-200"
            onClick={() => {
              const filteredList = listofRestaurants
                .filter((res) => res.info.avgRating > 4.3)
                .sort((a, b) => b.info.avgRating - a.info.avgRating);
              setfilteredRestaurants(filteredList);
            }}>
            Top Rated
          </button>
        </div>
      </div>
      <div className="res-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredRestaurants.map((Restaurant) => {
          return (
            <Link
              key={Restaurant.info.id}
              to={"/restaurants/" + Restaurant.info.id}>
              {Restaurant.info.avgRating > 4.3 ? (
                <HighRating resData={Restaurant} />
              ) : (
                <RestaurantCard resData={Restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

// {
//   Restaurant.info.avgRating > 4.5 ? (
//     <HighRating resData={Restaurant} />
//   ) : (
//     <RestaurantCard resData={Restaurant} />
//   );
// }
