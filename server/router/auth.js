const bcrypt = require('bcryptjs')
const express = require('express');
const router = express.Router()

require("../db/conn")
const User = require("../model/userSchema")

router.get('/', (req, res) => {
    res.send(`Hello World From The Router`)
})

// USING PROMISES 

// router.post('/register', (req, res) => {

//     const { name, email, phone, work, password, cpassword } = req.body
//     if (!name || !email || !phone || !work || !password || !cpassword) {
//         return res.status(422).json({ error: "Please filled all the fields" })
//     }

//     User.findOne({ email: email }).then((userExist) => {
//         if (userExist) {
//             return res.status(422).json({ error: "Email already exists" })
//         }
//         const user = new User({
//             name,
//             email,
//             phone,
//             work,
//             password,
//             cpassword,
//         })
//         user.save().then(() => {
//             res.status(201).json({
//                 message: 'User Registered Sucessfully'
//             })
//         }).catch((error) => {
//             res.status(500).json({ error: "Failed To Register" })
//         })
//     }).catch(error => { console.log(error) })

// })

// ASYNC & AWAIT

router.post('/register', async (req, res) => {

    const { name, email, phone, work, password, cpassword } = req.body

    if (!name || !email || !phone || !work || !password || !cpassword) {
        return res.status(422).json({ error: "Please filled all the fields" })
    }

    try {
        const userExist = await User.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "Email already exists" })
        } else if (password != cpassword) {
            return res.status(422).json({ error: "Password Does Not Match" })
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword, })
            // Here the code for the hashing the password will run just before the save() runs 
            await user.save()

            return res.status(201).json({ message: "User Registered Sucessfully" })
        }


    } catch (error) {
        console.log(error)
    }

})

router.post('/signin', async (req, res) => {

    try {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(400).json({ error: "Please Fill Up Details" })
        }

        const userLogin = await User.findOne({ email: email })

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password)

            if (!isMatch) {
                return res.status(400).json({ error: "Invalid Credentials" })
            } else {
                return res.json({ message: "User Signin Sucessfully" })
            }
        } else {
            return res.status(400).json({ error: "Invalid Credentials" })
        }



    } catch (error) {
        console.log(error)
    }
})

module.exports = router;