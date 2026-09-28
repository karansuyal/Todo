
const API_URL = "http://localhost:5000";

const list = document.getElementById("list");
const input = document.getElementById("taskInput");
const statusEl = document.getElementById("status");

async function loadTasks() {
  try {
    const res = await fetch(`${API_URL}/api/tasks`);
    const tasks = await res.json();
    list.innerHTML = "";
    tasks.forEach((t) => {
      const li = document.createElement("li");
      li.textContent = t.text;
      const del = document.createElement("button");
      del.textContent = "Delete";
      del.onclick = () => deleteTask(t.id);
      li.appendChild(del);
      list.appendChild(li);
    });
    statusEl.textContent = "";
  } catch (e) {
    statusEl.textContent = "Backend se connect nahi ho paya. API_URL check karo.";
  }
}

async function addTask() {
  const text = input.value.trim();
  if (!text) return;
  await fetch(`${API_URL}/api/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  input.value = "";
  loadTasks();
}

async function deleteTask(id) {
  await fetch(`${API_URL}/api/tasks/${id}`, { method: "DELETE" });
  loadTasks();
}

document.getElementById("addBtn").onclick = addTask;
loadTasks();
