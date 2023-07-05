import { Task } from "../models/taskModel.js";
import { User } from "../models/userModel.js";

export const createTask = async (req, res) => {
  console.log(req.body);
  try {
    const { title, description } = req.body;

    // Create new task asociated to current user
    const newTask = new Task({ title, description, user: req.userId });
    await newTask.save();

    // Add task to current user
    const user = await User.findById(req.userId);
    user.tasks.push(newTask);
    await user.save();

    res.status(201).json(newTask);
  } catch (error) {
    console.error(`Error creating task: ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const getTasks = async (req, res) => {
  console.log(req.body);
  try {
    // Get all user's tasks
    const user = await User.findById(req.userId).populate("tasks");
    const tasks = user.tasks;

    res.status(200).json(tasks);
  } catch (error) {
    console.error(`Error getting tasks: ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateTask = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    // Check if the task belongs to current user
    const task = await Task.findOne({ _id: id, user: req.userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Update task
    task.title = title;
    task.description = description;
    task.completed = completed;
    await task.save();

    res.status(200).json(task);
  } catch (error) {
    console.error(`Error updating task: ${error}`);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTask = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;

    // Check if the task belongs to current user
    const task = await Task.findOne({ _id: id, user: req.userId });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Delete task
    await task.remove();

    res.status(200).json({ message: "Task deleted succesfully" });
  } catch (error) {
    console.error("Error deleting task", error);
    res.status(500).json({ message: "Server error" });
  }
};
