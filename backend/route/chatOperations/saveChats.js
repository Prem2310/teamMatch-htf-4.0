// create an endpoint to save chats
// code
const express = require("express");
const router = express.Router();
const ChatRooms = require("../../models/chatRooms");

router.post("/", async (req, res) => {
    try {
        const { user1, user2, roomCode, message } = req.body;
        console.log(roomCode,"roomString")
        const msg = await ChatRooms.find({roomCode : roomCode})
        console.log(msg,"msg")
        if (!msg) {
            res.status(400).json({ error: "Room not found" });
        }
        else{
            msg[0].messages.push({sender: user1, message: message});
            await msg.save();
            res.status(200).json({ message: "Message saved", msg : msg });
        }

    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
});

module.exports = router;