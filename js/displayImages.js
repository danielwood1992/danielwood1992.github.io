import { actions } from './actions.js';

let beans = 50;

// Update bean count displayed on page
function updateBeanCount() {
  const beanCountDisplay = document.getElementById('beanCount');
  beanCountDisplay.textContent = beans;
}

// Spend beans on an action and trigger it
function spendBeans(actionType, actionParam) {
  if (beans <= 0) {
    disableButtons();  // Disable buttons when out of beans
    return;
  }

  if (actions[actionType]) {
    actions[actionType](actionParam);
    beans -= 10;
    updateBeanCount();

    if (beans <= 0) {
      disableButtons();
    }
  } else {
    console.error('Action type not found:', actionType);
  }
}

// Disable all buttons when beans are depleted
function disableButtons() {
  const buttons = document.querySelectorAll('#buttonSection button');
  buttons.forEach(button => button.disabled = true);
}

// Event listener for button clicks to trigger actions
document.getElementById('buttonSection').addEventListener('click', function(event) {
  const button = event.target;
  const actionType = button.getAttribute('data-action');
  const actionParam = button.getAttribute('data-param');

  if (actionType) {
    spendBeans(actionType, actionParam);
  }
});

// Initial setup: Update bean count on page load
updateBeanCount();

