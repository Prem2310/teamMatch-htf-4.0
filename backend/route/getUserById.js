// create an endpoint to get user by id
// code 
const express = require("express");
const router = express.Router();
const AllUsers = require("../models/users");

router.get("/:username", async (req, res) => {
    try {
        const user = await AllUsers.find({username: req.params.username});
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(400).json({ error: "User not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
}
);

module.exports = router;