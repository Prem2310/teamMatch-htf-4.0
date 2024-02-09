require('dotenv').config()
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const server = http.createServer(app);
const mongoose = require("mongoose");
const client=require('./mongodb')
const bodyParser = require("body-parser");

mongoose.set('strictQuery',false)

const dbURI = process.env.DB_URI;
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


const signup = require("./route/signup");
const login = require("./route/login");
const allUsers = require("./route/getUsers");
const addFriend = require("./route/addFriend");
const addSkills = require("./route/addSkills");
const updateUser = require("./route/updateUser");
const removeFriend = require("./route/removeFriend");

app.use("/signup", signup);
app.use("/login", login);
app.use("/allUsers",allUsers)
app.use("/addFriend",addFriend)
app.use("/addSkills",addSkills)
app.use("/updateUser",updateUser)
app.use("/removeFriend",removeFriend)

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);

  socket.on("joinRoom", (data) => {
    socket.join(data.roomCode);
    console.log("joined room", data.roomCode);
  });

  socket.on("sendMessage", (data) => {
    socket.to(data.roomCode).emit("recieveMessage", data);
  });
});

server.listen(3000,async () => {
    console.log("Server is running on port 3000");
});

const start=async()=>{
    try{
        await mongoose.connect(dbURI)
        app.listen(5000,()=>{
            console.log(`Listening on port ${PORT}`);
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({ error: "server side error"})
    }
}

app.use("/", (req, res) => {
    res.send("Hello World");
  });

start()