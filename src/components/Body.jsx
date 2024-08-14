import RestaurantCard from "./RestaurantCard";
import resImages from "../utils/mockData"; // Make sure mockData contains the resImages array
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      " "
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

  const fetchExtra = async () => {
    console.log("Fetching extra");
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/update",
      {
        method: "POST", // Use the POST method as required by the API
        headers: {
          "Content-Type": "application/json",
          // Include any other necessary headers, such as authentication tokens
        },
        body: JSON.stringify({
          // Only include parameters required by the API
          offset: 0, // Example parameter for pagination (starting point)
          limit: 20, // Example parameter for the number of results
          // Exclude latitude and longitude if they are not needed
          // Add any other required parameters as per the API documentation
        }),
      }
    );

    const extraData = await response.json();
    console.log(extraData);
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
          // console.log(Restaurant);
          return (
            <RestaurantCard key={Restaurant.info.id} resData={Restaurant} />
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
