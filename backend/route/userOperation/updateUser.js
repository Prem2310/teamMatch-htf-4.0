const express = require("express");
const router = express.Router();
const AllUsers = require("../../models/users");

router.post("/", async (req, res) => {
    try {
        const {username, bio, fullName, image} = req.body;
        console.log(username, bio, fullName, "username, image, bio")
        const user = await AllUsers.findOne({ username: username });

        if (user) {
            if (bio !== "") {
                user.bio = bio;
            }
            if (image !== "") {
                user.image = image;
            }
            if (fullName !== "") {
                user.fullName = fullName;
            }
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