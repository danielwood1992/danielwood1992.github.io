let beans = 1000000;

function updateBeanCount() {
  document.getElementById('beanCount').textContent = beans;
}

function startGame() {
  document.getElementById('rulesSection').style.display = 'none';
  document.getElementById('gameSection').style.display = 'block';
  updateBeanCount();
}

function goBackToRules() {
  document.getElementById('rulesSection').style.display = 'block';
  document.getElementById('gameSection').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  const startButton = document.getElementById('startGameButton');
  if (startButton) {
    startButton.addEventListener('click', startGame);
  }

  const backButton = document.getElementById('backToRulesButton');
  if (backButton) {
    backButton.addEventListener('click', goBackToRules);
  }

  updateBeanCount();
});

