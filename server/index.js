import express from 'express'
import { Connection } from './database/db.js';
import router from './routes/routes.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { User } from './schema/user.js';


const app = express();

app.use(cors({
    origin: 'https://meet-up-client-six.vercel.app',
    methods: ['GET', 'POST', 'DELETE'],
    // allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
  }));
app.get ("/", (req, res)=>{
    res.json("hello");
})
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/', router);
Connection();
const PORT = 8001;
app.listen(PORT,()=>{
    console.log("App is Connected to PORT: "+ PORT)
})
