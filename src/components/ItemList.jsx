import { URL } from "../utils/constants";
import React, { useState } from "react";

const ItemList = ({ items }) => (
  <div>
    <h2 className="text-xl font-bold mb-4">Recommended ({items.length})</h2>
    <div className="flex flex-col space-y-4">
      {items.map((item) => (
        <ZoomableImage
          key={item.card.info.id}
          imageUrl={URL + item.card.info.imageId}
          name={item.card.info.name}
          price={item.card.info.price}
          description={item.card.info.description}
        />
      ))}
    </div>
  </div>
);

const ZoomableImage = ({ imageUrl, name, price, description }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div
      className={`relative flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-2xl cursor-pointer transition-shadow duration-300 ${
        isZoomed ? "z-20" : "z-0"
      }`}
      onClick={handleImageClick}>
      <div className={`flex-grow ${isZoomed ? "opacity-0" : "opacity-100"}`}>
        <h3 className="font-bold text-lg mb-1">
          {name} - ₹{price / 100}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="relative">
        <img
          src={imageUrl}
          alt={name}
          className={`w-28 h-28 transition-transform duration-300 ${
            isZoomed ? "transform scale-[3.5] z-50" : ""
          }`}
        />
        <button
          className={`absolute top-0 right-0 mt-2 mr-2 bg-white text-gray-800 font-bold py-1 px-2 rounded shadow-lg transition-opacity duration-300 ${
            isZoomed ? "opacity-0" : "opacity-100"
          }`}>
          Add +
        </button>
      </div>
    </div>
  );
};

export default ItemList;
