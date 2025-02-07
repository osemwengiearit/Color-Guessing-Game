import React from "react";

const GameStatus = ({ gameStatus }) => {
  return (
    <p data-testid="gameStatus" className="game-status">
      {gameStatus}
    </p>
  );
};

export default GameStatus;