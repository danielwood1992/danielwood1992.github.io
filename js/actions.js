//Function to display an image
function displayImage(imageFileName) {
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '';  // Clear previous content

  const img = document.createElement('img');
  img.src = `images/${imageFileName}`;
  img.alt = `Displaying ${imageFileName}`;
  img.classList.add('responsive-img');
  outputDiv.appendChild(img);
}


function customAction(message) {
	console.log(message)
}

// Export actions for modularity
// Requires a comma separated list
const actions = {
  displayImage: displayImage,
  customAction: customAction
};

export { actions };

