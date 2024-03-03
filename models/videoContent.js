import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    links: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      default: "Message not Available",
    },
  },
  { timestamps: true }
);

export default mongoose.model("video-contents", videoSchema);
