// Write a program to add friend based on username in mongodb
//
// Expected Output
// code
const express = require("express");
const router = express.Router();

const AllUsers = require("../models/users");

router.post("/", async (req, res) => {
    try {
        
        const username = req.body.username;
        const friendRequest = req.body.friend;

        const user = await AllUsers.findOne({ username: username });
        const friend = await AllUsers.findOne({ username: friendRequest });
        if (friend) {
            if (user.friends.includes(friend.username)) {
                res.status(400).json({ error: "Already friends" });
            } else {
                user.friends.push(friend.username);
                await user.save();
                
                friend.friends.push(username);
                await friend.save();
                
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