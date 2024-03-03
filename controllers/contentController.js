// contentController.js
import path from "path";
import fs from "fs";
import testimonialModel from "../models/testimonialModel.js";
export const createTestimonial = async (req, res) => {
  try {
    const { custid, custname, smallintro, explaination, rating } = req.body;
    console.log(req.body);
    const contents = await testimonialModel.findOne({ custid });
    if (contents) {
      return res.send({
        success: true,
        message: "This user already has a Testimonial.",
      });
    }

    const newTestimonial = new testimonialModel({
      custid,
      custname,
      smallintro,
      explaination,
      rating, // Use the provided rating or default to 5
    });

    // Save the testimonial to the database
    await newTestimonial.save();

    res.status(201).json({ success: true, message: "Testimonial created" });
  } catch (error) {
    console.error("Error creating testimonial:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// contentController.js

export const getAllTestimonials = async (req, res) => {
  try {
    const testimonials = await testimonialModel.find();
    res.status(200).json(testimonials);
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
export const updateTestimonials = async (req, res) => {
  const { custid, custname, smallintro, explaination, rating, homepage } =
    req.body;
  console.log(custid);
  console.log(homepage);

  try {
    // Find the testimonial by custid
    const testimonial = await testimonialModel.findOne({ custid });

    if (!testimonial) {
      return res.status(202).json({ message: "Testimonial not found" });
    }

    // Update the homepage value
    testimonial.custname = custname;
    testimonial.smallintro = smallintro;
    testimonial.explaination = explaination;
    testimonial.rating = rating;
    testimonial.homepage = homepage;

    // Save the updated testimonial
    await testimonial.save();

    return res.status(200).json({ message: "Homepage updated successfully" });
  } catch (error) {
    console.error("Error updating homepage:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
// ... existing code ...

export const delHandler = async (req, res) => {
  const { custid } = req.body;
  const val = await testimonialModel.findOneAndDelete({ custid });
  if (val) {
    res.status(202).send({
      success: true,
      message: `Testimonial Deletd Successfully`,
    });
  } else {
    res.status(200).send({
      success: true,
      message: "Customer ID does not Exist!!",
    });
  }
};

export const getTestimonialVideo = async (req, res) => {
  try {
    const videoFilename = req.params.videoFilename;

    // Find the testimonial with the matching video filename
    const testimonial = await testimonialModel.findOne({ videoFilename });

    if (!testimonial) {
      return res
        .status(404)
        .json({ success: false, message: "Testimonial not found" });
    }

    const videoData = testimonial.videoData.buffer;
    const contentType = testimonial.contentType;

    const videoPath = path.join(
      __dirname,
      `../path/to/your/videos/${videoFilename}`
    );

    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {
      // ... existing code ...
    } else {
      const head = {
        "Content-Length": fileSize,
        "Content-Type": contentType,
      };

      res.writeHead(200, head);
      fs.createReadStream(videoPath).pipe(res);
    }
  } catch (error) {
    console.error("Error fetching video:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// export const createTestimonial = async (req, res) => {
//   try {
//     const { custid, custname, smallintro, explaination, rating } = req.body;
//     console.log(req.body);
//     // Check if video file is included in the request
//     // if (!req.file) {
//     //   return res
//     //     .status(400)
//     //     .json({ success: false, error: "Video file is required" });
//     // }

//     // // Get video data from the request
//     // const videoData = req.file.buffer;
//     // const contentType = req.file.mimetype;

//     // Create a new testimonial instance

//     const contents = await testimonialModel.findOne({ custid });
//     if (contents) {
//       return res.send({
//         success: true,
//         message: "This user already has a Testimonial.",
//       });
//     }

//     const newTestimonial = new testimonialModel({
//       custid,
//       custname,
//       smallintro,
//       explaination,
//       rating, // Use the provided rating or default to 5
//       // videoData,
//       // contentType,
//     });

//     // Save the testimonial to the database
//     await newTestimonial.save();

//     res.status(201).json({ success: true, message: "Testimonial created" });
//   } catch (error) {
//     console.error("Error creating testimonial:", error);
//     res.status(500).json({ success: false, message: "Internal Server Error" });
//   }
// };
