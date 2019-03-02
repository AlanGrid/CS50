/**
Todo List Version 1
Console
**/


let tasks = [];

do {
	var taskInput = prompt("Enter Task");
	if (taskInput !=='quit') {
		tasks.push(taskInput);
	}
} 

while (taskInput !== 'quit')

	tasks.forEach(function(e){
		console.log(e);

	});


























