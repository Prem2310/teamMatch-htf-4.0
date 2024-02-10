// create an endpoint to save chats
// code
const express = require("express");
const router = express.Router();
const ChatRooms = require("../../models/chatRooms");

router.post("/", async (req, res) => {
    try {
        const { user1, user2, roomCode, messages } = req.body;

        const roomString = username < friend ? username + friend : friend + username;
        const msg = await ChatRooms({roomCode : roomString})

        msg.messages.push({sender: user1, message: messages});

        await msg.save();
        res.status(200).json("Chats Saved");
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
});

module.exports = router;