
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

    submitBtn.addEventListener("click", () => {
      const guess = parseInt(guessInput.value);

      if (!guess || guess < 1 || guess > 5) {
        alert("Wrong! Come on Muggle, you can only input numbers. Guess a number betweeen 1 and 5.");
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
    });
  });

  function checkInput() {
    const input = document.getElementById("userInput").value.trim();
    if (input === "Gryffindor") {
      alert("Correct, wonderful Warlock! Welcome to Gryffindor House!");
    } else {
      alert("Wrong again, Muggle! Hint: the correct house mascot is a Lion 🦁.");
    }
  }
