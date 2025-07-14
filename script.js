window.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("guessModal");
  const submitBtn = document.getElementById("submitGuess");
  const guessInput = document.getElementById("guessInput");
  const supportButton = document.querySelector(".support-me");
  const broomstick = document.getElementById("broomstick");

  const targetNum = Math.floor(Math.random() * 5) + 1;
  console.log("Target number:", targetNum);

  // Show modal & hide support button at start
  modal.style.display = "flex";
  supportButton.style.opacity = "0";
  supportButton.style.pointerEvents = "none";

  // Core logic for guessing
  function handleGuess() {
    const guess = parseInt(guessInput.value);

    if (!guess || guess < 1 || guess > 5) {
      alert("Wrong! Come on Muggle, you can only input numbers. Guess a number between 1 and 5.");
      return;
    }

    if (guess === targetNum) {
      alert("Great job, wise Wizard! You may now enter the Numerology classroom!");
      modal.style.display = "none";
      supportButton.style.opacity = "1";
      supportButton.style.pointerEvents = "auto";
      broomstick.classList.add("fly");
    } else if (guess > targetNum) {
      alert("Too high, Muggle! Enter a new number between 1 and 5:");
    } else {
      alert("Too low, Mud Blood! Enter a new number between 1 and 5:");
    }
  }

  // Submit on button click
  submitBtn.addEventListener("click", handleGuess);

  // Submit on Enter key
  guessInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      handleGuess();
    }
  });
});

// Sorting hat input check
function checkInput() {
  const input = document.getElementById("userInput").value.trim();
  if (input === "Gryffindor") {
    alert("Correct, wonderful Warlock! Welcome to Gryffindor House!");
  } else {
    alert("Wrong again, Muggle! Hint: the correct house mascot is a Lion 🦁.");
  }
}
