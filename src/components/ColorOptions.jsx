import React from "react";

const ColorOptions = ({ colors, handleGuess, disabled }) => {
  return (
    <div className="color-options">
      {colors.map((color, index) => (
        <button
          key={index}
          data-testid="colorOption"
          style={{ backgroundColor: color }}
          onClick={() => handleGuess(color)}
          disabled={disabled}
        ></button>
      ))}
    </div>
  );
};

export default ColorOptions;