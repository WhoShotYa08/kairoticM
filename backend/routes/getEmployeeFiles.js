import express from "express";
import Assigned from "../models/assignModel.js";

const filesRouter = express.Router();

filesRouter.post("/getFilesEmployee", async (req, res) => {
  const { email } = req.body; // Get email from request body
  try {
    // Find the document where the employeeAssigned array contains an object with the given email
    const files = await Assigned.find({
      employeeAssigned: { $elemMatch: { email: email } } // Match the email in the array
    });

    if (files.length > 0) {
      res.json(files); // Return the found files
    } else {
      res.status(404).json({ message: "No files found for this email." });
    }
  } catch (error) {
    res.status(500).json({ message: "Error fetching files", error });
  }
});

export default filesRouter;