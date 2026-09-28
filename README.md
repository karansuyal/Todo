# Mini Todo

A small full-stack project with a frontend and a backend. Built for learning how to push code to GitHub and deploy it.

## Features

- Add a task
- View all tasks
- Delete a task

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express

## Project Structure

```
mini-todo/
├── frontend/    # UI (deploy on Vercel)
│   ├── index.html
│   ├── style.css
│   └── script.js
└── backend/     # REST API (deploy on Render)
    ├── server.js
    ├── package.json
    └── .env
```

## Getting Started

### 1. Run the backend

```bash
cd backend
npm install
npm start
```

The server runs at `http://localhost:5000`.

### 2. Run the frontend

Open `frontend/index.html` in your browser.

## Environment Variables

Create a `.env` file inside the `backend` folder:

```
PORT=5000
SECRET_KEY=your-secret-key
```

Never push the `.env` file to GitHub. Add it to `.gitignore`.

## API Endpoints

| Method | Endpoint         | Description       |
|--------|------------------|-------------------|
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Add a new task    |
| DELETE | `/api/tasks/:id` | Delete a task     |

## Deployment

1. Deploy the `backend` folder on Render.
2. Copy the Render URL and set it as `API_URL` in `frontend/script.js`.
3. Deploy the `frontend` folder on Vercel.

## License

This project is open source and free to use for learning.