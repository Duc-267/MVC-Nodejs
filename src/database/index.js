import mongoose from "mongoose";

export async function connectDatabase() {
  try {
    await mongoose.connect(
      "mongodb+srv://mduc2672002:duc2672002@todo.f2ehdvi.mongodb.net/TodoApp"
    );
    console.log("connect successfully");
  } catch (error) {
    console.log("connect fail");
  }
}
