import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

//User registration
export const registerUser = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;

    //Check if user exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    //Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create new user
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered succesfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};

//User login
export const loginUser = async (req, res) => {
  console.log(req.body);
  try {
    const { username, password } = req.body;

    //Check if user exists
    const existingUser = await User.findOne({ username });
    if (!existingUser) {
      return res.status(401).json({ message: "User not found" });
    }

    //Check password
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    //Generate access token
    const accessToken = jwt.sign({ userId: username._id }, "secretKey", {
      expiresIn: "1h",
    });

    res.status(200).json({ accessToken, user: existingUser });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error al obtener los usuarios", error);
    res.status(500).json({ message: "Ha ocurrido un error en el servidor" });
  }
};
