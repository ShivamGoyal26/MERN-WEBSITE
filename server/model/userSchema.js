const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
})




// We are hashing the password here

userSchema.pre('save', async function (next) {
    console.log("inside")
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12)
        this.cpassword = await bcrypt.hash(this.cpassword, 12)
    }
    next()
})

// We are generating the tokens here

userSchema.methods.generateAuthToken = async function () {
    console.log("In the token generator")
    try {
        let genratedToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({ token: genratedToken })
        await this.save()
        return genratedToken
    } catch (error) {
        console.log(error)
    }
}

// Collection Creation

const User = mongoose.model('USER', userSchema)

module.exports = User