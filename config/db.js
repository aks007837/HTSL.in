import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";

const connectDB = async () => {
  console.log(process.env.PORT);
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB Database`.bgGreen.white);
  } catch (error) {
    console.log(`Error in MongoDB ${error}`.bgRed.white);
  }
};

export default connectDB;
