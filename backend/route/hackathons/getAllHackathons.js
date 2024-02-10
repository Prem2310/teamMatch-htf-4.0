const express = require("express");
const router = express.Router();
const Hackathon = require("../../models/hackathons");

router.get("/", async (req, res) => {
  try {
    const hackathons = await Hackathon.find();
    res.status(200).json(hackathons);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "server side error" });
  }
});

module.exports = router;
