//Fumction to start the game (hide rules and show game section)
function startGame() {
  document.getElementById('rulesSection').style.display = 'none';
  document.getElementById('gameSection').style.display = 'block';
}

// Function to go back to the rules section
function goBackToRules() {
  document.getElementById('rulesSection').style.display = 'block';
  document.getElementById('gameSection').style.display = 'none';
}

// Attach functions to the window object so they are accessible globally
window.startGame = startGame;
window.goBackToRules = goBackToRules;

