// create an endpoint to save chats
// code
const express = require("express");
const router = express.Router();
const ChatRooms = require("../../models/chatRooms");

router.post("/", async (req, res) => {
    try {
        // const { user1, user2, roomCode, messages } = req.body;

        // const roomString = username < friend ? username + friend : friend + username;
        // const chat = new ChatRooms({ user1, user2, roomCode, messages });
        // await chat.save();
        res.status(200).json("working");
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
});

module.exports = router;