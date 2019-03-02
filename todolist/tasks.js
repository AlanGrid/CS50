document.addEventListener("DOMContentLoaded", () => {
	

	document.querySelector("#new-task").onsubmit = () => {

	// Create new item for list
	const li = document.createElement('li');
	li.innerHTML = document.querySelector('#task').value;	


	// Add new item to task list
	document.querySelector("#new-task").append(li);


	// Clear input field
	document.querySelector("#task").value = '';


	// Stop form from submitting
	return false;
	
};

});























