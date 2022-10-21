import mongoose from "mongoose";
const Schema = mongoose.Schema;

const User = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const user = mongoose.model("User", User);

export default user;
