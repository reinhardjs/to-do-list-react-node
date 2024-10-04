const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

let tasks = [];
let taskId = 1;

app.post('/tasks', (req, res) => {
  const { task_name, description } = req.body;
  const newTask = {
    id: taskId++,
    task_name,
    description,
    completed: false
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.put('/tasks/:id/complete', (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = true;
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Backend service running on http://localhost:${port}`);
});
