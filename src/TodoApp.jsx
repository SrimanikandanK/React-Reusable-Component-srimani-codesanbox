import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Handle form submit to add a task
  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      setTasks([...tasks, { id: Date.now(), text: taskInput }]);
      setTaskInput(""); // Reset input after adding
    }
  };

  // Handle deleting a task by filtering it out from the list
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="todo-app">
      <h1>To-Do List</h1>

      <form onSubmit={handleAddTask}>
        <input
          type="text"
          value={taskInput}
          placeholder="Enter new task"
          onChange={(e) => setTaskInput(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onDelete={handleDeleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
