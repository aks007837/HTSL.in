import JWT from "jsonwebtoken";
import usermodel from "../models/usermodel.js";

// Protected Routes token base

export const requireSignIn = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is missing" });
    }

    const decoded = JWT.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid token" });
  }
};
