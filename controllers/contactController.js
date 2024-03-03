import contactModel from "../models/contactModel.js";

export const contactControl = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name) {
      return res
        .status(200)
        .send({ success: false, message: "Name is Required" });
    }
    if (!email) {
      return res
        .status(200)
        .send({ success: false, message: "Email-ID is Required" });
    }
    if (!phone) {
      return res
        .status(200)
        .send({ success: false, message: "Contact Number is Required" });
    }
    if (!message) {
      return res
        .status(200)
        .send({ success: false, message: "Message is Required" });
    }
    const user = await new contactModel({
      name,
      email,
      phone,
      message,
    }).save();

    res.status(201).send({
      success: true,
      message: "Message Sent Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      success: false,
      message: "Error in Contacting",
      error,
    });
  }
};
