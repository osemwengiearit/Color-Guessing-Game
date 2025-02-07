import React from "react";

const ColorBox = ({ targetColor }) => {
  return (
    <div
      data-testid="colorBox"
      className="color-box"
      style={{ backgroundColor: targetColor }}
    ></div>
  );
};

export default ColorBox;