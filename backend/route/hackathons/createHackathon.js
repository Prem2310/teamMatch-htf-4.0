// write an endpoint to create a hackathon
// code
const express = require("express");
const router = express.Router();
const Hackathon = require("../../models/hackathons");

router.post("/", async (req, res) => {
  try {
    const { name, link, username } = req.body;
    const hackathon = new Hackathon({
      name,
      link,
      username,
    });
    await hackathon.save();
    res.status(200).json({ message: "Hackathon created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "server side error" });
  }
});

module.exports = router;
