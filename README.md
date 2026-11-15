# Lab 6: React and Node/Express Movie App

A React app (Vite) that reads and creates movie data using a Node/Express back end.

- **Front end:** React app in this folder. Runs on http://localhost:5173
- **Back end:** Express server in `BackEnd/server.cjs`. Runs on http://localhost:4000

## Routes on the server

| Method | URL           | What it does                                   |
| ------ | ------------- | ---------------------------------------------- |
| GET    | `/api/movies` | Returns the list of movies as JSON (`Read.jsx`) |
| POST   | `/api/movies` | Receives a new movie (`Create.jsx`)             |

## How to run

Open two terminals.

**Terminal 1: back end**

```bash
cd BackEnd
npm install
npm start
```

**Terminal 2: front end**

```bash
npm install
npm run dev
```

Then open http://localhost:5173 and use the **Read** and **Create** links.
