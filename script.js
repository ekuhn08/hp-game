// Wait for the whole DOM to be ready before running this logic
window.addEventListener("DOMContentLoaded", () => {
  // Get references to modal elements
  const modal = document.getElementById("guessModal");
  const submitBtn = document.getElementById("submitGuess");
  const guessInput = document.getElementById("guessInput");

  // Generate a random number between 1 and 5
  const targetNum = Math.floor(Math.random() * 5) + 1;
  console.log("Target number:", targetNum); // For debugging

  // Show the modal overlay so the user can make a guess
  modal.style.display = "flex";

  // When the user clicks the submit button...
  submitBtn.addEventListener("click", () => {
    // Get the number they entered and convert to an integer
    let guess = parseInt(guessInput.value);

    // If the input is not a number, show an error and return
    if (!guess) {
      alert("Wrong! Come on Muggle, you can only input numbers. Guess a number betweeen 1 and 5.");
      return;
    }

    const supportButton = document.querySelector(".support-me");

// Show modal + hide support button
modal.style.display = "flex";
supportButton.classList.add("hide");

// When guess is correct:
if (guess === targetNum) {
  alert("Great job, wise Wizard! You may now enter the Numerology classroom!");
  modal.style.display = "none";
  supportButton.classList.remove("hide"); // Show support button again
  document.getElementById("broomstick").classList.add("fly");
}
    // If the guess is too high
    else if (guess > targetNum) {
      alert("Too high, Muggle! Enter a new number between 1 and 5:");
    } 
    // If the guess is too low
    else {
      alert("Too low, Mud Blood! Enter a new number between 1 and 5:");
    }
  });
});

// Function to check the user's input against the correct house name
  function checkInput() {
    const input = document.getElementById("userInput").value.trim();
    if (input === "Gryffindor") {
      alert("Correct, wonderful Warlock! Welcome to Gryffindor House!");
    } else {
      alert("Come on, Muggle. You did not guess correctly, try again (hint: the correct house's mascot is a Lion 🦁).");
    }
  }
