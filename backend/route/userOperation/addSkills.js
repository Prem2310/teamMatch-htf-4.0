const express = require("express");
const router = express.Router();
const AllUsers = require("../../models/users");

router.post("/", async (req, res) => {
    try {
        const username = req.body.username;
        const skill = req.body.skill;

        const user = await AllUsers.findOne({ username: username });
        console.log(user.skills,"user.skills")
        console.log(skill,"skill")
        if (user) {

            if (user.skills.includes(skill)) {
                res.status(400).json({ error: "Skill already exists" });
            }
            else {
                user.skills.push(skill);
                await user.save();
                res.status(200).json({ message: "Skill added" });
            }
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