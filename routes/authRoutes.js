import express from "express";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";
// import testimonialRoutes from "./testimonialRoutes.js";
import {
  createTestimonial,
  delHandler,
} from "../controllers/contentController.js";
import { getAllTestimonials } from "../controllers/contentController.js";
import usermodel from "../models/usermodel.js";
import testimonialModel from "../models/testimonialModel.js";
import { updateTestimonials } from "../controllers/contentController.js";
import { vidController } from "../controllers/vidController.js";
import videoContent from "../models/videoContent.js";
import { requireSignIn } from "../middlewares/authMiddleware.js";

//router object

const router = express.Router();

//REGISTER || METHOD POST

router.post("/register-admin", registerController);

//Login || METHOD POST
router.post("/login-admin", loginController);

// get all testimonials
router.get(
  "/loggedin-admin/admin-panel/testimonials",

  getAllTestimonials
);
router.post(
  "/loggedin-admin/admin-panel/testimonials",

  createTestimonial
);
router.post(
  "/loggedin-admin/admin-panel/del-testimonials",

  delHandler
);
router.post(
  "/loggedin-admin/admin-panel/update-testimonials",
  updateTestimonials
);
// searching for a particular testimonials
router.post(
  "/loggedin-admin/admin-panel/find-testimonials",

  async (req, res) => {
    try {
      let custid = req.body.custid; // Assuming the custid is sent in the request body
      custid = parseInt(custid, 10);

      console.log(req.body);

      if (isNaN(custid)) {
        return res.status(200).json({ message: "Invalid custid provided" });
      }

      const findid = await testimonialModel.findOne({ custid });

      if (findid) {
        // return res.json({ data: findid, message: "Data found successfully" });
        return res.json(findid);
      }

      return res.status(202).json({ message: "Testimonial not found" });
    } catch (err) {
      console.log(`Error: ${err}`);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
);

// Adding and getting videos
router.post(
  "/loggedin-admin/admin-panel/add-video",

  vidController
);

// for getting the videos in tabbed contents for users only
router.get("/videos/get-videos", async (req, res) => {
  try {
    const all_data = await videoContent.find();
    // console.log(all_data);
    res.json(all_data);
  } catch (error) {
    console.log(`Error in getting data ${error}`);
  }
});
// for getting alll the registered users
router.get("/users/getall", requireSignIn, async (req, res) => {
  try {
    const all_data = await usermodel.find();
    // console.log(all_data);
    res.json(all_data);
  } catch (error) {
    console.log(`Error in getting data ${error}`);
  }
});

// test protected route
router.get("/usertest", requireSignIn, (req, res) => {
  res.status(200).send({
    message: "TRue",
    ok: true,
  });
});
export default router;
