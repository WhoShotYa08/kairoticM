import express from "express";
import File from "../models/fileModel.js";

const filesRouter = express.Router();

filesRouter.get("/api//files", async (req, res) => {
  try {
    const files = await File.find();
    console.log(files);
    
    res.json(files);
  } catch (error) {
    res.status(500).json({ message: "Error fetching files", error });
  }
});

export default filesRouter;