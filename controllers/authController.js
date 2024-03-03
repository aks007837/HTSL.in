import userModel from "../models/usermodel.js";
import { comparePassword, hashPassword } from "../helpers/authHelper.js";
import JWT from "jsonwebtoken";
import asyncHandler from "async-handler";

export const registerController = async (req, res) => {
  try {
    const { fname, lname, username, password } = req.body;
    // return res.send({
    //   message: `${fname}, ${lname}, ${username}, ${password}`,
    // });
    //validations
    if (!fname) {
      return res
        .status(200)
        .send({ success: false, message: "First Name is Required" });
    }
    if (!lname) {
      return res
        .status(200)
        .send({ success: false, message: "Last Name is Required" });
    }
    if (!username) {
      return res
        .status(200)
        .send({ success: false, message: "Username is Required" });
    }
    if (!password) {
      return res
        .status(200)
        .send({ success: false, message: "Password is Required" });
    }
    const exisitingUser = await userModel.findOne({ username });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Username Exists already",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      fname,
      lname,
      username,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User Registered Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { username, password } = req.body;

    // return res.send({ message: `${username}, ${password}` });
    // validation
    if (!username || !password) {
      return res.status(200).send({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    //check user
    const user = await userModel.findOne({ username });
    if (!user) {
      return res.status(200).send({
        success: false,
        message: "User not found",
      });
    }
    if (user.role != 1) {
      return res.status(200).send({
        success: false,
        message: "Access Denied",
      });
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
      return res.status(200).send({
        success: false,
        message: "Incorrect credentials",
      });
    }

    //   creating token
    const token = await JWT.sign(
      { _id: user._id },
      process.env.JWT_ACCESS_SECRET,
      { expiresIn: process.env.JWT_ACCESS_EXPIREIN }
    );
    res.status(200).send({
      success: true,
      message: "login Successful",
      user: {
        fname: user.fname,
        lname: user.lname,
        id: user._id,
        username: user.username,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      errormessage: error,
      success: false,
      message: "Error in Login",
      error,
    });
  }
};

export const testController = async (req, res) => {
  res.send("protected routes");
};
