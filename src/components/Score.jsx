import React from "react";

const Score = ({ score, guesses }) => {
  return (
    <p className="score">
      Score: <span data-testid="score">{score}</span> | Guesses:{" "}
      <span data-testid="guesses">{guesses}</span>
    </p>
  );
};

export default Score;