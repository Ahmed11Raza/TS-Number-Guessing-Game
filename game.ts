import * as readline from 'readline';

// Initialize readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Game variables
const randomNumber: number = Math.floor(Math.random() * 100) + 1; // Random number between 1-100
const maxAttempts: number = 5;
let attempts: number = 0;

// Function to prompt user input
const askQuestion = (question: string): Promise<string> => {
  return new Promise((resolve) => rl.question(question, resolve));
};

// Main game logic
const playGame = async () => {
  console.log("Welcome to the Number Guessing Game!");
  console.log("I'm thinking of a number between 1 and 100.");
  console.log(`You have ${maxAttempts} attempts to guess it.`);

  while (attempts < maxAttempts) {
    const answer = await askQuestion(`Attempt ${attempts + 1}: Enter your guess: `);
    const userGuess = parseInt(answer, 10);

    if (isNaN(userGuess)) {
      console.log("Please enter a valid number.");
      continue;
    }

    attempts++;

    if (userGuess === randomNumber) {
      console.log(`🎉 Congratulations! You guessed the number ${randomNumber} correctly in ${attempts} attempts.`);
      rl.close();
      return;
    } else if (userGuess < randomNumber) {
      console.log("Too low! Try again.");
    } else {
      console.log("Too high! Try again.");
    }
  }

  console.log(`😞 You've used all ${maxAttempts} attempts. The number was ${randomNumber}. Better luck next time!`);
  rl.close();
};

// Start the game
playGame();
