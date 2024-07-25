import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// import upload from "./middleware/multer.js";

dotenv.config();
const port = process.env.PORT;

const app = express();

//Connect to the database
connectDB();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie parser middleware
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandler);

// app.use(upload);

app.listen(port, () => console.log(`Server is running on port ${port}`));
