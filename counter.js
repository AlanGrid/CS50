
//Wait untill contentDOM is loaded and after that run this function 

document.addEventListener("DOMContentLoaded", function() {

	// Give me that element from the page
	document.querySelector("button").onclick = count;

});

let counter = 0;

function count() {
	counter++; 

	document.querySelector("#counter").innerHTML = counter;
}

// const double = (x) => {
// 	return x * 2;
// }























