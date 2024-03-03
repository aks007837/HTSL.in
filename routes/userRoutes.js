import express from "express";
import { contactControl } from "../controllers/contactController.js";

//router object

const router = express.Router();

router.post("/contact", contactControl);
export default router;
