const express = require("express");
const router = express.Router();
const User = require('../../models/users')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken')

const maxAge = 3 * 24 * 60 * 60

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    })
}

const validate = async (data) => {
    const { username, email, password } = data
    if (!username || !email || !password) {
        return { message: "Please enter all the fields" }
    }
    if (username.length < 1 || email.length < 1 || password.length < 1) {
        return { message: "Please enter all the fields" }
    }
    if (password.length < 6) {
        return { message: "Password should be atleast 6 characters long" }
    }
    if (username.includes(" ")) {
        return { message: "Username should only contain alphabets and numbers and special characters like _ - ." }
    }
    if (email.includes(" ")) {
        return { message: "Invalid email address" }
    }
    return true
}

router.post("/", async (req, res) => {
    try {
        const existingUser = await User.find()
        const check = await existingUser.filter((user) => {
            if (user.username === req.body.username) {
                res.status(400).json({ error: "Username already exists" })
                return true
            }
            else if (user.email === req.body.email) {
                res.status(400).json({ error: "Email already exists" })
                return true
            }
        })

        if (check !== true) {
            const validation = await validate(req.body)
            if (validation === true) {
                const hash = bcrypt.hashSync(req.body.password, saltRounds);
                const new_user = await User.create({
                    username: req.body.username,
                    email: req.body.email,
                    password: hash,
                    fullName: req.body.fullName
                })
                const token = createToken(new_user._id)
                res.status(200).json({ message: new_user, token: token })
                return
            }
            else {
                res.status(400).json({ error: validation.message || "server side error" })
                return
            }
        }
        else {
            res.status(400).json({ error: "User already exists" })
            return
        }
        return
    }
    catch (err) {
        // res.status(400).json({ error: err.message})
        return
    }
})

module.exports = router;