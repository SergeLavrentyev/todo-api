const { Router } = require("express");
const router = Router();
const Todos = require("../models/todoItem");

//-TODO: try/catch blocks

// Read tasks
router.get("/", async (req, res) => {
  const allTodos = await Todos.find();
  res.status(200).json(allTodos);
});

// Creat new task
router.post("/", async (req, res) => {
  const newTodo = new Todos(req.body);
  const TodoItem = await newTodo.save();
  res.status(200).json(TodoItem);
});

// Delete task
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedItem = await Todos.findByIdAndDelete(id);
  res.status(200).json({ deletedItem, deleted: true });
});

// Update task
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedItem = await Todos.findByIdAndUpdate(id, req.body);
  res.status(200).json(updatedItem);
});

module.exports = router;
