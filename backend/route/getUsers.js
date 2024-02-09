const express = require("express");
const router = express.Router();
const AllUsers=require('../models/users')

router.get("/", async (req, res) => {
    try{
        const users = await AllUsers.find()
        console.log(users)
        // const result=await Image.find({username:req.query.username})
        res.status(200).json(users)
    }
    catch(error){
        console.log(error)
        res.status(400).json({ error: "server side error"})
    }
})

module.exports = router;