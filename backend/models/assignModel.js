import mongoose from "mongoose";

// Define a schema for each employee assigned
const employeeSchema = new mongoose.Schema({
  email: {
    type: String,
    required: false,  // Email field is mandatory
  },
  verified: {
    type: String,   // Boolean for true/false value
    required: false,
    default: "false",  
  }
});

// Define the main schema
const assignedUsersSchema = new mongoose.Schema(
  {
    drawingId: {
      type: String,
      required: false,  // Drawing ID is required,
    },
    employeeAssigned: {
      type: [employeeSchema],  // Array of employee objects
      required: false,
    },
  },
);

const Assigned = mongoose.model("Assigned", assignedUsersSchema);

export default Assigned;