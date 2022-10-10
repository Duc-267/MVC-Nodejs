import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Task = new Schema({
  name: { type: String, required: true },
  isDone: { type: Boolean },
});

const task = mongoose.model("Task", Task);

export default task;
