import express from "express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"

import user from "./routes/user.routes.js"

import cors from "cors"
import path from 'path'
import { fileURLToPath } from "url"
const app=express()

const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true); // Allow the origin
    } else {
      callback(new Error('Not allowed by CORS')); // Deny the origin
    }
  },credentials:true,
};
app.set('view engine','ejs')
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.resolve('views'));
app.use(express.static('public'))
app.use(cors(corsOptions));
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"))



app.use('/user',user)

app.get("/",(req,res)=>{
    res.send("working")
})


export {app}