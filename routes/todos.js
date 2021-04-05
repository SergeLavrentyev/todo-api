const { Router } = require("express");
const router = Router();
const todo = require("../controllers/todosController");
// Read tasks
router.route("/").get(todo.getAll);

// Creat new task
router.route("/").post(todo.create);

// Delete task
router.route("/:id").delete(todo.delete);

// Update task
router.route("/:id").put(todo.update);

module.exports = router;
