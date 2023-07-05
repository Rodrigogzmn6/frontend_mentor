import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  completed: { type: Boolean, default: false },
  description: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

export const Task = mongoose.model("Task", taskSchema);
