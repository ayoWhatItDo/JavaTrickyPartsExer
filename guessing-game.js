function guessingGame() {
  const RandNum = Math.floor(Math.random() * 100);
  let isOver = false;
  let numGuesses = 0;

  return function guess(num) {
    if (isOver) return "The game is over, you already won!";
    numGuesses++;
    if (num === RandNum) {
      isOver = true;
      const guess = numGuesses === 1 ? "guess" : "guesses";
      return `You win! You found ${num} in ${numGuesses} ${guess}.`;
    }
    if (num < RandNum) return `${num} is too low! try again`;
    if (num > RandNum) return `${num} is too high!`;
  };
}

module.exports = { guessingGame };
