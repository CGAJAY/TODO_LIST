// Import the tasks array from the tasks module
import { tasks } from "./tasks.js";
let textInputCont = document.getElementById("text");
let submitBtn = document.getElementById("submit");
let form = document.getElementById("form");
let taskList = document.getElementById("taskList");

// Function to render the tasks on the page
function render() {
	// Clear the current task list
	taskList.innerHTML = "";
	// Create a new div element to hold the tasks
	let tasksItems = document.createElement("div");
	// Loop through the tasks array and add each task to the div
	for (let i = 0; i < tasks.length; i++) {
		let task = tasks[i].text;
		// Create a container for each task
		let taskItem = document.createElement("div");
		// Add a class for each task
		taskItem.classList.add("taskItem");
		// Set the text content to the task
		taskItem.textContent = task;
		// Append the task div to the parent div
		tasksItems.appendChild(taskItem);

		// Create a remove button for each task
		let removeBtn = document.createElement("button");
		// Add a class for each task remove button
		removeBtn.classList.add("removebtn");
		// Set the innerHTML for the button
		removeBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
		removeBtn.onclick = function () {
			removeTask(i);
		};
		taskItem.appendChild(removeBtn);
	}
	// Append the parent div to the task list
	taskList.appendChild(tasksItems);
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

// Function to remove a task
function removeTask(index) {
	// Remove the task at the specified index
	tasks.splice(index, 1);
	// Render the updated tasks list
	render();
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
