import React from "react";
import "./ColorBlock.css";
import lemonTreesTwoMonthsOld from "../../images/lemonTreesTwoMonthsOld.webp";

const COLORS = ["red", "blue", "yellow"];

export const ColorBlock = _ => {
  const backgroundColor = COLORS[Math.floor(Math.random() * 3)];
  return (
    <div className={`color-block--${backgroundColor}`}>
      <img src={lemonTreesTwoMonthsOld} alt="plant" />
    </div>
  );
};
