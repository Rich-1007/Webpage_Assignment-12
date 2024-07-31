import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import "../styles/Card.css";

const Card = ({ item }) => {
  return (
    <div className="card-container">
      <div className="card-image-container">
        <img src={item.img} className="card-image" alt="" />
        <div className="card-info">
          <div className="flex flex-row items-center text-light">
            <IoIosHeartEmpty />
            <span>{item.likes}</span>
          </div>
          <div className="flex flex-row items-center gap-1 text-light">
            <IoEyeOutline />
            <span>{item.views}</span>
          </div>
        </div>
      </div>
      <div className="card-details">
        <div className="card-title">
          <span>{item.name}</span>
          <span className="text-xs">{item.yearOfOrigin}</span>
        </div>
        <span className="card-description">{item.description}</span>
      </div>
    </div>
  );
};

export default Card;
