const { Schema, model } = require("mongoose");

const TodoItem = new Schema(
  {
    task: {
      type: String,
      required: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("tasks", TodoItem);
