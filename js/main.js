//main.js

export function startGame() {
  document.getElementById('rulesSection').style.display = 'none';
  document.getElementById('gameSection').style.display = 'block';
}

// Function to go back to the rules section
export function goBackToRules() {
  document.getElementById('rulesSection').style.display = 'block';
     document.getElementById('gameSection').style.display = 'none';     }

     // Attach to the window object to make them globally accessible
     window.startGame = startGame;
     window.goBackToRules = goBackToRules;

document.addEventListener('DOMContentLoaded', () => {
	console.log('Main JavaScript loaded'); //just a placeholder really
})
