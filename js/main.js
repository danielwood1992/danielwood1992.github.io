let beans = 1000000;

// Function to update the bean count displayed on the page
function updateBeanCount() {
  document.getElementById('beanCount').textContent = beans;
}

// Function to start the game
function startGame() {
  document.getElementById('rulesSection').style.display = 'none';
  document.getElementById('gameSection').style.display = 'block';
  updateBeanCount();
}

// Function to go back to the rules section
function goBackToRules() {
  document.getElementById('rulesSection').style.display = 'block';
  document.getElementById('gameSection').style.display = 'none';
}


// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
  // Start Game button event listener
  const startButton = document.getElementById('startGameButton');
  if (startButton) {
    startButton.addEventListener('click', startGame);
  }

  // Back to Rules button event listener
  const backButton = document.getElementById('backToRulesButton');
  if (backButton) {
    backButton.addEventListener('click', goBackToRules);
  }

  // Initial update of bean count
  updateBeanCount();
  
  // Event listener for the "Show Message" button
//  document.getElementById('customAction').addEventListener('click', function() {
 //   showMessage();  // Display the message when the button is clicked
//  });

g);
