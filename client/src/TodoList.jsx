import { useState, useEffect } from "react";
import "./index.css";

const TodoList = () => {
	// State to hold the list of tasks
	const [tasks, setTasks] = useState([]);

	// State to manage the input for adding new tasks
	const [newTask, setNewTask] = useState("");

	// useEffect hook to fetch tasks from the backend when the component mounts
	useEffect(() => {
		fetchTasks(); // Fetch tasks when the component is first rendered
	}, []); // Empty dependency array means this runs only once after the initial render

	// Function to fetch tasks from the backend (GET request)
	const fetchTasks = async () => {
		try {
			const response = await fetch(
				"http://localhost:3005/tasks/"
			);
			const data = await response.json(); // Convert the response to JSON
			setTasks(data); // Update tasks state with fetched data
		} catch (error) {
			console.error("Error fetching tasks:", error); // Log any errors
		}
	};

	// Function to handle input changes
	function handleInputChange(e) {
		setNewTask(e.target.value); // Update newTask state with the value of the input field
	}

	// Function to add a new task (POST request)
	const addTask = async () => {
		if (newTask.trim() !== "") {
			// Ensure the new task is not just whitespace
			try {
				const response = await fetch(
					"http://localhost:3005/tasks/new",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json", // Indicate that we're sending JSON data
						},
						body: JSON.stringify({ title: newTask }), // Send the new task's title
					}
				);

				if (response.ok) {
					// Check if the request was successful
					const addedTask = await response.json(); // Get the newly added task from the response
					setTasks((prevTasks) => [
						...prevTasks,
						addedTask,
					]); // Add the new task to the tasks state
					setNewTask(""); // Clear the input field after adding the task
				} else {
					console.error("Failed to add task"); // Log failure message if the request wasn't successful
				}
			} catch (error) {
				console.error("Error adding task:", error); // Log any errors
			}
		}
	};

	// Function to delete a task by ID (DELETE request)
	const deleteTask = async (taskId) => {
		try {
			const response = await fetch(
				`http://localhost:3005/tasks/${taskId}`,
				{
					method: "DELETE", // Specify the DELETE request method
				}
			);

			if (response.ok) {
				// Check if the request was successful
				setTasks((prevTasks) =>
					prevTasks.filter((task) => task._id !== taskId)
				); // Remove the deleted task from the tasks state
			} else {
				console.error("Failed to delete task"); // Log failure message if the request wasn't successful
			}
		} catch (error) {
			console.error("Error deleting task:", error); // Log any errors
		}
	};

	// Render the UI
	return (
		<div className="to-do-list">
			<h1>To-Do List</h1>
			<div>
				<input
					type="text"
					id="task"
					placeholder="Enter a task"
					value={newTask} // Bind input value to newTask state
					onChange={handleInputChange} // Update newTask state on input change
				/>
				<button className="add-btn" onClick={addTask}>
					Add
				</button>
			</div>
			<ol>
				{tasks.map((task) => (
					<li key={task._id}>
						<span className="text">{task.title}</span>
						<button
							className="delete-btn"
							onClick={() => deleteTask(task._id)}
						>
							Delete
						</button>
						<button className="move-btn">👆</button>
						<button className="move-btn">👇</button>
					</li>
				))}
			</ol>
		</div>
	);
};

export default TodoList;
