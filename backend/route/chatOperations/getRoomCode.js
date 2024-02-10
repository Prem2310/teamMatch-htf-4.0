// endpoint to fetch room code using username and friend username
// code

const express = require("express");
const router = express.Router();
const ChatRooms = require("../../models/chatRooms");

router.post("/", async (req, res) => {
    try {
        const username = req.body.username;
        const friend = req.body.friend;
        const roomString = username < friend ? username + friend : friend + username;
        const chatRoom = await ChatRooms.findOne({ roomCode: roomString });
        if (chatRoom) {
            res.status(200).json({ roomCode: chatRoom.roomCode });
        } else {
            res.status(400).json({ error: "Room not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
}
);

module.exports = router;