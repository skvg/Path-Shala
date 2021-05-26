import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
// app config
const app = express();



// middlewares
app.use(express.json());
app.use(cors());

// DB config
const connectionUrl = 'mongodb+srv://appman:MmKG8qFcxne6gcz3@cluster0.dptio.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

//models
// import User from './models/users.js'

// routers
import Login from "./routes/login.js"
import Signup from "./routes/signup.js"
import User from "./routes/user.js"
import Logout from "./routes/logout.js"
import Teachers from "./routes/teachers.js"
import Course from "./routes/course.js"
app.use(Login)
app.use(Signup)
app.use(User)
app.use(Logout)
app.use(Teachers)
app.use(Course)

// listner
const port = process.env.PORT || 8001;
app.listen(port, ()=>{
    console.log('Your server is running on port ' + port)
})