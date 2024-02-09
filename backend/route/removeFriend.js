// endpoints to remove a friend from the user's friend list

// Expected Output
// code
const express = require("express");
const router = express.Router();
const AllUsers = require("../models/users");

router.post("/", async (req, res) => {
    try {
        const username = req.body.username;
        const friendRequest = req.body.friend;

        const user = await AllUsers.findOne({ username
        });
        const friend = await AllUsers.findOne({ username:
            friendRequest
        });

        if (friend) {
            if (user.friends.includes(friend.username)) {
                user.friends = user.friends.filter((friend) => friend !== friendRequest);
                await user.save();

                friend.friends = friend.friends.filter((friend) => friend !== username);
                await friend.save();

                res.status(200).json({ message: "Friend removed" });
            } else {
                res.status(400).json({ error: "Not friends" });
            }
        } else {
            res.status(400).json({ error: "Friend not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
}
);

module.exports = router;