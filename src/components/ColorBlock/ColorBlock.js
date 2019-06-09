import React from "react";
import "./ColorBlock.css";

const COLORS = ["red", "blue", "yellow"];

export const ColorBlock = ({ plant }) => {
  const backgroundColor = COLORS[Math.floor(Math.random() * 3)];
  return (
    <div className={`color-block color-block--${backgroundColor}`}>
      <img src={plant.image.source} alt="plant" />
    </div>
  );
};
