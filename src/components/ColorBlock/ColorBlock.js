import React from "react";
import "./ColorBlock.css";

const COLORS = ["red", "blue", "yellow"];

export const ColorBlock = ({ plant }) => {
  const backgroundColor = COLORS[Math.floor(Math.random() * 3)];
  const { name, image } = plant;
  return (
    <div className={`color-block color-block--${backgroundColor}`}>
      <img src={image.source} alt="plant" />
      <div className="name-and-date">
        <span>{name}</span>
        <span>{image.date.toDateString()}</span>
      </div>
    </div>
  );
};
