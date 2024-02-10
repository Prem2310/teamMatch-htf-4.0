// endpoint to add username to hackathon
// code
const express = require("express");
const router = express.Router();
const Hackathon = require("../../models/hackathons");

router.post("/", async (req, res) => {
    try {
        const { username, hackName } = req.body;
        console.log(username, hackName, "username, hackName");
        const hackathon = await Hackathon.findOne({ name: hackName });
        console.log(hackathon, "hackathon");
        if (hackathon) {
            hackathon.interestedPeoples.push(username);
            await hackathon.save();
            res.status(200).json({ message: "User added to hackathon" });
        } else {
            res.status(400).json({ error: "Hackathon not found" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
}
);

module.exports = router;