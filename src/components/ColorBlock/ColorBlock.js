import React from "react";
import "./ColorBlock.css";
import images from "../../images";

const COLORS = ["red", "blue", "yellow"];

export const ColorBlock = ({ imageName }) => {
  const backgroundColor = COLORS[Math.floor(Math.random() * 3)];
  return (
    <div className={`color-block color-block--${backgroundColor}`}>
      <img src={images[imageName]} alt="plant" />
    </div>
  );
};
