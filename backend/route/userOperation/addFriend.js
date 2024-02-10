// Write a program to add friend based on username in mongodb
//
// Expected Output
// code
const express = require("express");
const router = express.Router();
const AllUsers = require("../../models/users");
const ChatRooms = require("../../models/chatRooms");

router.post("/", async (req, res) => {
    try {
        
        const username = req.body.username;
        const friendRequest = req.body.friend;

        console.log(username, friendRequest,"username and friend");

        const user = await AllUsers.findOne({ username: username });
        const friend = await AllUsers.findOne({ username: friendRequest });
        // sort user strign and friend string alphabetically and create a new string using them
        // code 
        const roomString = username < friendRequest ? username + friendRequest : friendRequest + username;
        
        if (friend) {
            if (user.friends.includes(friend.username)) {
                res.status(400).json({ error: "Already friends" });
            } 
            else {
                user.friends.push(friend.username);
                await user.save();
                
                friend.friends.push(username);
                await friend.save();
                
                const chatRoom = await ChatRooms.create({
                    user1: username,
                    user2: friendRequest,
                    roomCode: roomString,
                });

                res.status(200).json({ message: "Friend added" });
            }
        } else {
            res.status(400).json({ error: "Friend not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
});

module.exports = router;