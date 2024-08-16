import RestaurantCard from "./RestaurantCard";
import resImages from "../utils/mockData"; // Make sure mockData contains the resImages array
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);

  // if no dependecy array then it will render every time
  // if we intilize with empty array only once
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

  return listofRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredList = listofRestaurants.filter((item) => {
                return item.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setfilteredRestaurants(filteredList);
            }}>
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants
              .filter((res) => res.info.avgRating > 4.3)
              .sort((a, b) => b.info.avgRating - a.info.avgRating);
            setfilteredRestaurants(filteredList);
          }}>
          Top rated btn{" "}
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((Restaurant, index) => {
          return (
            <Link
              key={Restaurant.info.id}
              to={"/restaurants/" + Restaurant.info.id}>
              <RestaurantCard resData={Restaurant} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;

// const arr = useState(resList);
// const listofRestaurants = arr[0];  -- > the above code is just array destrucaring
// const setlistofRestaurants = arr[1];
