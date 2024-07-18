import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT


const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

//Cookie parser middleware
app.use(cookieParser())


app.listen(port, () => console.log(`Server is running on port ${port}`))