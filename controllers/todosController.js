const Todo = require("../models/Todo");
const crudController = require("../controllers/crudControllers");

module.exports = {
  ...crudController(Todo),
};
