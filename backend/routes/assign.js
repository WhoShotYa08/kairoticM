import express from "express";
import Assigned from "../models/assignModel.js";

const assignedRouter = express.Router();
//just add to database
assignedRouter.post("/api/assign", async (req, res) => {
  console.log(`${req.method} ${req.url}`);
  try {
    console.log("enter try");
    
    const { drawingId, employeeAssigned } = req.body;
    console.log(req.body);
    
    const assigned = await Assigned({
      drawingId,
      employeeAssigned,
    });
    await assigned.save();
    res.status(200).json(assigned);
  } catch (error) {
    res.status(500).json({ message: "Error assigning1 users", error });
  }
});

export default assignedRouter;