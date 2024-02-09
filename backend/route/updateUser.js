const express = require("express");
const router = express.Router();
const AllUsers = require("../models/users");

router.post("/", async (req, res) => {
    try {
        const { username, image, bio } = req.body;
        console.log(username, image, bio, "username, image, bio")
        const user = await AllUsers.findOne({ username: username });

        if (user) {
            user.image = image;
            user.bio = bio;
            await user.save();

            res.status(200).json({ message: "User details updated" });
        }
        else {
            res.status(400).json({ error: "User not found" });
        }


    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
});

module.exports = router;