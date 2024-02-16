// write an endpoint to create a hackathon
// code
const express = require("express");
const router = express.Router();
const Hackathon = require("../../models/hackathons");

router.post("/", async (req, res) => {
    try {
        const { name, link, username } = req.body;
        const getAllHackathons = await Hackathon.find({ name: name });
        if (getAllHackathons.length > 0) {
            return res.status(400).json({ error: "Hackathon already exists" });
        }
        else {
            const hackathon = new Hackathon({
                name:name,
                link:link,
                interestedPeoples:username,
            });
            await hackathon.save();
            res.status(200).json({ message: "Hackathon created" });
        }
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "server side error" });
    }
});

module.exports = router;
