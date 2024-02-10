// endpoint to fetch all the chats using room code
// code
//
const express = require("express");
const router = express.Router();
const ChatRooms = require("../../models/chatRooms");

router.post("/", async (req, res) => {
    try {
        const roomCode = req.body.roomCode;
        const chatRoom = await ChatRooms.findOne({
            roomCode: roomCode,
        });
        if (chatRoom) {
            res.status(200).json(chatRoom.messages);
        } else {
            res.status(400).json({ error: "Room not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
});

module.exports = router;