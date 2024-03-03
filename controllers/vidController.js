import videoContent from "../models/videoContent.js";
export const vidController = async (req, res) => {
  try {
    console.log(req.body);
    const { type, links, message } = req.body;
    if (!type) {
      return res.send({ message: "Type of Video is Required" });
    }
    if (!links) {
      return res.send({ message: "Link of Video is Required" });
    }
    const vid = await new videoContent({
      type,
      links,
      message,
    }).save();
    res.status(201).send({
      success: true,
      message: "Video Added SuccessFully",
    });
  } catch (error) {
    console.log(`Error in adding Video ${error}`);
    res.status(400).send({
      success: false,
      message: "Video not Registerd",
      error,
    });
  }
};
