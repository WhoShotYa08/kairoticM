import mongoose from "mongoose";

// Define a schema for each employee assigned
const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,  // This makes sure the email field is mandatory
  },
  verified: {
    type: String,   // Changing the type to Boolean for a true/false value
    required: true,  // This makes sure the verified field is mandatory
    default: false,  
  }
});

// Define the main schema
const assignedUsers = new mongoose.Schema(
  {
    drawingId: {
      type: String,
      required: true,
    },
    employeeAssigned: {
      type: [employeeSchema],  // Array of employee objects based on employeeSchema
      required: true,
    },
  },
  { timestamps: true } 
);

const Assigned = mongoose.model("Files", assignedUsers);

export default Assigned;
