import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema(
  {
    custid: {
      type: Number,
      required: true,
      unique: true,
      // validate: {
      //   validator: (value) => String(value).length >= 6, // Minimum length of 6 characters
      //   message: "Custid must have a minimum length of 6 characters",
      // },
    },
    custname: {
      type: String,
      required: true,
      trim: true,
    },
    smallintro: {
      type: String,
      required: true,
      trim: true,
    },
    explaination: {
      type: String,
      required: true,
      trim: true,
    },
    rating: {
      type: Number,
      required: true,
      default: 5,
    },
    homepage: {
      type: Number,
      required: true,
      default: 0,
    },
    // videoData: {
    //   type: Buffer, // Binary data for the video
    //   required: true,
    // },
    // contentType: {
    //   type: String, // MIME type of the video
    //   required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("testimonial_details", testimonialSchema);
