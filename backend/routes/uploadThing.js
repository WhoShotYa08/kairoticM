import { createUploadthing } from "uploadthing/express";
import File from "../models/fileModel.js"; 
import express from "express";


const f = createUploadthing();
const router = express.Router();

export const uploadRouter = {
  imageUploader: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 4,
    },
    "application/pdf": {
      maxFileCount: 2,
      maxFileSize: "10MB",
    },
    "model/vnd.dwf": {
      maxFileCount: 4,
      maxFileSize: "20MB",
    },
    "image/vnd.dwg": {
      maxFileCount: 4,
      maxFileSize: "20MB",
    },
    blob: {
      maxFileCount: 4,
      maxFileSize: "20MB",
    },
  }).onUploadComplete(async (data, req) => {
    try {
      const { desc } = req.body; // Extract description from request body

      // Log the description for debugging
      console.log("File description:", desc);
      console.log("Upload completed", data.file); // File data uploaded

      // Create a new File document using the uploaded file data
      const fileData = new File({
        filename: data.file.filename,
        url: data.file.url,
        fileType: data.file.type,
        size: data.file.size,
        description: desc || "empty",
      });

      // Save the file data to MongoDB
      const savedFile = await fileData.save();
      console.log("File saved to MongoDB:", savedFile);
    } catch (error) {
      console.error("Error storing file:", error);
    }
  }),
};

export default router;
