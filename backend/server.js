require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(express.json());

let tasks = [{ id: 1, text: "Project GitHub par push karo", done: false }];

app.get("/", (req, res) => res.send("Backend chal raha hai"));
app.get("/api/tasks", (req, res) => res.json(tasks));

app.post("/api/tasks", (req, res) => {
  const task = { id: Date.now(), text: req.body.text, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter((t) => t.id !== Number(req.params.id));
  res.json({ ok: true });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
