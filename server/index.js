const express = require("express");
const cors = require("cors");
const pool = require("./db");
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // req.body

// Routes
// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    consoe.log(err.message);
  }
});
// Get all todos
app.get("/todos", async (req, res) => {
  try {
    const allTodos = await pool.query("SELECT * FROM todo");
    res.json(allTodos.rows);
  } catch (err) {
    soncoel.log(err.message);
  }
});
// Get a todo
// Update a todo
// Delete a todo

app.listen(5000, () => {
  console.log("Server has started on port 5000");
});
