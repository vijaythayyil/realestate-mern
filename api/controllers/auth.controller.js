import User from "../models/user.model.js";
import brcyptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

//@desc Register a new user
//@route POST /api/auth/signup
//@access Public
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = brcyptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    next(error);
  }
};

//@desc Sign in a user
//@route POST /api/auth/signin
//@access Public
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const validUser = await User.findOne({ email: email });
    if (!validUser) return next(errorHandler(404, "User not found"));

    const validPassword = brcyptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "Invalid Credentials!!!"));

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
      expiresIn: "100h",
    });

    const { password: pass, ...rest } = validUser._doc;

    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({ message: "User logged in successfully", user: rest });
  } catch (error) {
    next(error);
  }
};
