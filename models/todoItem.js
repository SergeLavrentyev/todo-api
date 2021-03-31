const { Schema, model } = require("mongoose");

const TodoItem = new Schema({
  task: {
    type: String,
    required: true,
  },
});

module.exports = model("tasks", TodoItem);
