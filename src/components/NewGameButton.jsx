import React from "react";

const NewGameButton = ({ resetGame }) => {
  return (
    <button data-testid="newGameButton" className="new-game-button" onClick={resetGame}>
      New Game
    </button>
  );
};

export default NewGameButton;