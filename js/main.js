function startGame() {
  document.getElementById('rulesSection').style.display = 'none';
  document.getElementById('gameSection').style.display = 'block';
}

// Function to go back to the rules section
function goBackToRules() {
  document.getElementById('rulesSection').style.display = 'block';
  document.getElementById('gameSection').style.display = 'none';
}

// Wait for the DOM to fully load before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
  // Attach the startGame function to the start button
  const startButton = document.getElementById('startGameButton');
  if (startButton) {
    startButton.addEventListener('click', startGame);
  }

  // Attach the goBackToRules function to the back button
  const backButton = document.getElementById('backToRulesButton');
  if (backButton) {
    backButton.addEventListener('click', goBackToRules);
  }
});

