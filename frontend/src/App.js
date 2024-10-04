import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:3001/tasks');
    setTasks(response.data);
  };

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3001/tasks', {
      task_name: taskName,
      description: taskDescription
    });
    setTaskName('');
    setTaskDescription('');
    fetchTasks();
  };

  const completeTask = async (id) => {
    await axios.put(`http://localhost:3001/tasks/${id}/complete`);
    fetchTasks();
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Task name"
          required
        />
        <input
          type="text"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Task description"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <strong>{task.task_name}</strong>: {task.description}
            {!task.completed && (
              <button onClick={() => completeTask(task.id)}>Complete</button>
            )}
            {task.completed && <span> (Completed)</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
