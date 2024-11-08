//bean counting function

let beans = 50;

// Function to update the bean count displayed on the page
function updateBeanCount() {
  const beanCountDisplay = document.getElementById('beanCount');  // Get the element showing bean count
  beanCountDisplay.textContent = beans;  // Update the text content to the current number of beans
}

// Function to display the selected image and decrease beans
function displayImage(imageFileName) {
  const outputDiv = document.getElementById('output');  // Get the div to display the image
  outputDiv.innerHTML = '';  // Clear any previously displayed content (if any)

  // Create an <img> element to display the image
  const img = document.createElement('img');
  img.src = `images/${imageFileName}`;  // Set the source path to the image
  img.alt = `Displaying ${imageFileName}`;  // Set the alt text for accessibility
  img.classList.add('responsive-img');  // Add a CSS class to style the image

  // Append the image to the output div
  outputDiv.appendChild(img);

  // Decrease the number of beans by 10
  beans -= 10;

  // Update the bean count displayed on the page
  updateBeanCount();

  // If no beans are left, disable all buttons
  if (beans <= 0) {
    disableButtons();
  }
}

// Function to disable the buttons when there are no beans left
function disableButtons() {
  const buttons = document.querySelectorAll('#buttonSection button');  // Get all buttons
  buttons.forEach(button => {
    button.disabled = true;  // Disable each button
  });
}

// Event listener for button clicks to trigger image display
document.getElementById('buttonSection').addEventListener('click', function(event) {
  const button = event.target;  // Get the clicked button
  const imageFileName = button.getAttribute('data-image');  // Get the image filename from the button

  // Only proceed if the button has a valid image file associated with it
  if (imageFileName) {
    displayImage(imageFileName);  // Display the image and update the bean counter
  }
});

// Initial setup: Update bean count on page load
updateBeanCount();
/
