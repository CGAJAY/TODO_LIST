import React, { useState } from "react";
import "./index.css";

const TodoList = () => {
	const [tasks, setTasks] = useState([]);
	const [newtask, setNewTask] = useState("");

	function handleInputChange(e) {
		setNewTask(e.target.value);
	}
	function addTask() {
		if (newtask.trim() !== "") {
			setTasks((prevTasks) => [...prevTasks, newtask]);
		}
	}
	function deleteTask(index) {}
	function moveTaskUp(index) {}
	function moveTaskDown(index) {}
	return (
		<div className="to-do-list">
			<h1>To-Do-List</h1>
			<div>
				<input
					type="text"
					id="task"
					placeholder="Enter a task"
					value={newtask}
					onChange={handleInputChange}
				/>
				<button className="add-btn" onClick={addTask}>
					Add
				</button>
			</div>
			<ol>
				{tasks.map((task, i) => (
					<li key={i}>
						<span className="text">{task}</span>
						<button className="delete-btn">Delete</button>
						<button className="move-btn">👆</button>
						<button className="move-btn">👇</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export default TodoList;
