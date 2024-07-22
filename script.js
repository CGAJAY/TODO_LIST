let textInputCont = document.getElementById("text");
let submitBtn = document.getElementById("submit");
let form = document.getElementById("form");
let taskList = document.getElementById("taskList");

function addTask() {
	let task = textInputCont.value;
	return task;
}

function render() {
	let task = addTask();
	let listCont = document.createElement("li");
	let taskCont = document.createElement("span");
	taskCont.classList.add("task");
	taskCont.textContent = task;

	let deleteTask = document.createElement("span");
	deleteTask.classList.add("delete");
	deleteTask.textContent = "X";
	listCont.appendChild(taskCont);
	listCont.appendChild(taskCont);
	taskList.appendChild(listCont);
	textInputCont.value = "";
}
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();
	if (textInputCont.value === "") {
		alert("Add a task");
	} else {
		render();
	}
	console.log("Hello");
});
