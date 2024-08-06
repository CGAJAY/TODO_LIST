let textInputCont = document.getElementById("text");
let submitBtn = document.getElementById("submit");
let form = document.getElementById("form");
let taskList = document.getElementById("taskList");
// Initial tasks array
let tasks = [
	"Play football",
	"Go hiking",
	"Code for 2 hours",
];
// Function to render the tasks on the page
function render() {
	// Clear the current task list
	taskList.innerHTML = "";
	// Create a new div element to hold the tasks
	let div = document.createElement("div");
	// Loop through the tasks array and add each task to the div
	for (let i = 0; i < tasks.length; i++) {
		let task = tasks[i];
		// Create a new div for each task
		let taskItem = document.createElement("div");
		// Set the text content to the task
		taskItem.textContent = task;
		// Append the task div to the parent div
		div.appendChild(taskItem);
	}
	// Append the parent div to the task list
	taskList.appendChild(div);
}

// Function to add a new task
function addTask() {
	// Check if the input is empty
	if (textInputCont.value === "") {
		alert("Add a task");
	} else {
		// Get the task from the input and add it to the tasks array
		let task = textInputCont.value;
		tasks.push(task);
		// Render the updated tasks list
		render();
		// Clear the input field
		textInputCont.value = "";
	}
}

// Event listener for the submit button
submitBtn.addEventListener("click", (e) => {
	// Prevent the default form submission
	e.preventDefault();
	// Call the addTask function to add the new task
	addTask();
});

// Initial rendering of tasks when the page loads
render();
