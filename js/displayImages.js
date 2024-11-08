import { actions } from './actions.js';

let beans = 1000000;

function updateBeanCount() {
  const beanCountDisplay = document.getElementById('beanCount');
  beanCountDisplay.textContent = beans;
}

function spendBeans(actionType, actionParam) {
  if (beans <= 0) {
    disableButtons();
    return;
  }

  if (actions[actionType]) {
    actions[actionType](actionParam);
    beans -= 10;
    updateBeanCount();
  } else {
    console.error('Action type not found:', actionType);
  }
}

function disableButtons() {
  const buttons = document.querySelectorAll('#buttonSection button');
  buttons.forEach(button => button.disabled = true);
}

document.getElementById('buttonSection').addEventListener('click', function(event) {
  const button = event.target;
  const actionType = button.getAttribute('data-action');
  const actionParam = button.getAttribute('data-param');

  if (actionType) {
    spendBeans(actionType, actionParam);
  }
});

updateBeanCount();

