import React, { useState, useEffect } from "react";
import ColorBox from "./components/ColorBox";
import ColorOptions from "./components/ColorOptions";
import GameStatus from "./components/GameStatus";
import Score from "./components/Score";
import NewGameButton from "./components/NewGameButton";
import "./App.css";

// Function to generate similar colors
const generateSimilarColors = () => {
  const baseColor = {
    r: Math.floor(Math.random() * 256), // Random red value (0-255)
    g: Math.floor(Math.random() * 256), // Random green value (0-255)
    b: Math.floor(Math.random() * 256), // Random blue value (0-255)
  };

  // Generate 5 similar colors by slightly adjusting the RGB values
  const colors = [];
  for (let i = 0; i < 6; i++) {
    const color = {
      r: Math.min(255, Math.max(0, baseColor.r + Math.floor(Math.random() * 50 - 25))), // Adjust red (-25 to +25)
      g: Math.min(255, Math.max(0, baseColor.g + Math.floor(Math.random() * 50 - 25))), // Adjust green (-25 to +25)
      b: Math.min(255, Math.max(0, baseColor.b + Math.floor(Math.random() * 50 - 25))), // Adjust blue (-25 to +25)
    };
    colors.push(`rgb(${color.r}, ${color.g}, ${color.b})`);
  }

  return colors;
};

function App() {
  const [targetColor, setTargetColor] = useState("");
  const [colors, setColors] = useState([]);
  const [score, setScore] = useState(0);
  const [guesses, setGuesses] = useState(0);
  const [gameStatus, setGameStatus] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // Initialize the game
  useEffect(() => {
    startGame();
  }, []);

  // Start a new game
  const startGame = () => {
    const newColors = generateSimilarColors();
    const randomColor = newColors[Math.floor(Math.random() * newColors.length)];
    setTargetColor(randomColor);
    setColors(newColors);
    setGameStatus("");
    setGameOver(false);
  };

  // Handle color guess
  const handleGuess = (color) => {
    if (gameOver) return; // Disable guesses if the game is over

    setGuesses((prevGuesses) => prevGuesses + 1);

    if (color === targetColor) {
      setGameStatus("Correct! 🎉");
      setScore((prevScore) => prevScore + 1);
      setTimeout(() => startGame(), 1000); // Start a new game after 1 second
    } else {
      setGameStatus("Wrong! 😢");
    }

    // End the game after 15 guesses
    if (guesses + 1 >= 15) {
      setGameOver(true);
      setGameStatus(`Game Over! Final Score: ${score}`);
    }
  };

  // Reset the game
  const resetGame = () => {
    setScore(0);
    setGuesses(0);
    startGame();
  };

  return (
    <div className="App">
      <h1>Color Guessing Game</h1>
      <ColorBox targetColor={targetColor} />
      <ColorOptions colors={colors} handleGuess={handleGuess} disabled={gameOver} />
      <GameStatus gameStatus={gameStatus} />
      <Score score={score} guesses={guesses} />
      <NewGameButton resetGame={resetGame} />
    </div>
  );
}

export default App;