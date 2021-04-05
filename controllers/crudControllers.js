const crudController = (model) => ({
  async getAll(req, res) {
    try {
      const todos = await model.find();
      return res.status(200).send(todos);
    } catch (err) {
      console.log(err);
    }
  },
  async create({ body }, res) {
    try {
      const todo = new model(body);
      const newTodo = await todo.save();
      return res.status(200).send(newTodo);
    } catch (err) {
      console.log(err);
    }
  },
  async update({ params: { id }, body }, res) {
    try {
      const todo = await model.findByIdAndUpdate(id, body, { new: true });
      return res.status(200).send(todo);
    } catch (error) {
      console.log(error);
    }
  },
  async delete({ params: { id } }, res) {
    try {
      await model.findByIdAndDelete(id);
      return res.status(200).send({ message: "todo deleted" });
    } catch (error) {
      console.log(error);
    }
  },
});

module.exports = crudController;
