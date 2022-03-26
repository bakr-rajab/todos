const Todo = require("../models/Todo");
const { todoValidation } = require("../validation");

const create = async (req, res, next) => {
  const { error } = todoValidation(req.body);
  if (error) {
    res.status(402).json({ error: error.details[0].message, status: "error" });
    return;
  }
  const newTodo = new Todo(req.body);
  try {
    await newTodo
      .save()
      .then((todo) => res.status(200).json(todo))
      .catch((err) => next(err));
  } catch (error) {
    next(error);
  }
};
const index = async (req, res, next) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (error) {
    next(error);
  }
};
const show = async (req, res, next) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.json(todo);
  } catch (error) {
    next(error);
  }
};

const edit = async (req, res, next) => {
  try {
    // console.log(req.body)
    const updateTodo = await Todo.findOneAndUpdate({ "_id": req.params.id }, req.body, { new: true, runValidators: true });
    updateTodo? res.status(201).json(updateTodo) :res.status(400).json({ message:"Not found"})
  } catch (error) {
    next(error);
  }
};
const remove = async (req, res, next) => {
  try {
    const todo = await Todo.deleteOne({ "_id": req.params.id });
    if (todo.deletedCount === 1) {
      res.status(200).json({ message:"1 word deleted successful..." })
    }else{
    res.status(404).json({ message: "word not found" })
    }
    // next()
  } catch (err) {
    next(err)
  }
};
module.exports = {
  index,
  show,
  edit,
  remove,
  create
}