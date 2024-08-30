import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      {/* {header section } */}
      <div className="m-auto w-11/12 bg-gray-300 p-4 rounded-lg mb-4 shadow-xl ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}>
          <span className="font-bold text-lg ">
            {data.title} &nbsp; ({data.itemCards.length})
          </span>
          <span>{"⬇️"}</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
      {/* {Accodiab body} */}
    </div>
  );
};

export default RestaurantCategory;
