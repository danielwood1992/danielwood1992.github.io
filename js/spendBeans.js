import { actions } from './actions.js';

let beans = 1000000;

function updateBeanCount() {
  const beanCountDisplay = document.getElementById('beanCount');
  beanCountDisplay.textContent = beans;
}

// Updated `spendBeans` to use the `actions` object to call both displayImage and customAction
function spendBeans(actionType, actionParam, actionCost) {
  if (beans <= actionCost) {
    disableButtons();
    return;
  }

  // Check if actionType exists in `actions`, then call it with `actionParam`
  if (actions[actionType]) {
    actions[actionType](actionParam);  // <--- Unified way to call any action in `actions`
    beans -= actionCost;                       // Deduct beans for each action performed
    updateBeanCount();                 // Update displayed bean count
  } else {
    console.error('Action type not found:', actionType);
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll('#buttonSection button');
  buttons.forEach(button => button.disabled = true);
}

// Set up buttonSection to listen for clicks and pass action and param to `spendBeans`
document.getElementById('buttonSection').addEventListener('click', function(event) {
  const button = event.target;
  const actionType = button.getAttribute('data-action');
  const actionParam = button.getAttribute('data-param');
  const actionCost = parseInt(button.getAttribute('data-cost'), 10); //get the cost
  if (actionType) {
    spendBeans(actionType, actionParam, actionCost);  // Pass `actionType` and `actionParam` to spendBeans
  }
});

updateBeanCount();

