const { Schema, model } = require("mongoose");

const Todo = new Schema(
  {
    task: {
      type: String,
      require: true,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = model("tasks", Todo);
