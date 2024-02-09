const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const server = http.createServer(app);

app.use(cors());

const signup = require("./route/signup");
const login = require("./route/login");

app.use("/", (req, res) => {
  res.send("Hello World");
});

app.use("/signup", signup);
app.use("/login", login);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});

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
    // socket.broadcast.emit("recieveMessage",data);
    socket.to(data.roomCode).emit("recieveMessage", data);
    // console.log(msg,"mesg")
  });
  // socket.on('message', (msg) => {
  // console('message: ' + msg);
  // });
  // socket.on('disconnect', () => {
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
