//Function to display the image selected
//
function displayImage(imageFileName) {

	
	const outputDiv = document.getElementByID('output') //Get where the image will be displayed
	// note const produces variables whose value cannot be reassigned once they are initialised
	outputDiv.innerHTML = ''; //Clear any previously displayed content from the area

	//Create an <img> element to display the image
	const img = document.createElement('img');
	//src stands for the source - so it's where a resource is being loaded from I guess
	img.src = 'images/$imageFileName}' //Set the src of the image to the path of the image
	img.alt = 'Displaying ${imageFileName}' //sets an alt text for accesibility
	img.classList.add('responsive-img'); //adds CSS class to make the image responsive (adapts to different screen sizes)

	//Append image to output div
	outputDiv.appendChild(img);
}

//Event listener for click events on any button inside the button section
//I guess an event listener is something that listens for the event
//
//So document refers to the html document (I guess index)
//Get element by ID - this allows you to retrieve an element by the ID listed in the html document
//so here it's looking for buttonsection
document.getElementByID('buttonSection').addEventListener('click', function(event) {
	const button = event.target; //Get the button that was clicked
	const imageFileName = button.getAttribute('data-image'); //Get the data image attribute (which should be the image filename)

	if (imageFileName){
		displayImage(imageFileName);
	}
});
