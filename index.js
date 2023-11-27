import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import NikRoute from "./routes/NikRoute.js";
import UserRoute from "./routes/UserRoute.js";
import telebot from "telebot";

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
app.use(NikRoute);
app.use(UserRoute);

const bot = new telebot('6747804244:AAEb8jpi8lF8hNBghL7VRpsAQzZ-rcvgBcg');

bot.on(/^\/say (.+)$/, (msg, props) => {
    const text = props.match[1];
    console.log(text.split(','));
    return bot.sendMessage(msg.from.id, text);
});
bot.on('/start', (msg) => msg.reply.text('Selamat datang ... '));
bot.on('/hello', (msg) => {
    return bot.sendMessage(msg.from.id, `Hello, ${msg.from.first_name}!`);
});

bot.start();


app.listen(port, () => console.log('Server running at port ' + port));



// module.exports = app;
