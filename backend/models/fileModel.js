import mongoose from "mongoose";

const fileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    appUrl: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: false
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

const File = mongoose.model("Files", fileSchema);

export default File;
