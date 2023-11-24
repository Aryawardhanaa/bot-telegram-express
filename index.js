import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import ProductRoute from "./routes/ProductRoute.js";
import UserRoute from "./routes/UserRoute.js";
import SoalRoute from "./routes/SoalRoute.js";

dotenv.config();
const port = process.env.PORT || 5000;
//    allowedHeaders: ['Content-Type', 'Authorization'],

const app = express();
app.use(cookieParser());

const corsOptions = {
    origin: ['http://localhost:5173', 'https://kelas-kedinasan.vercel.app'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true          //access-control-allow-credentials:true
}

app.use(cors(corsOptions));
app.use(express.json());
app.use(ProductRoute);
app.use(SoalRoute);
app.use("/", UserRoute);


app.listen(port, () => console.log('Server running at port ' + port));



// module.exports = app;
