const User = require('../models/user')
const bcrypt = require('bcryptjs')
const { UserInputError } = require('apollo-server')
const jwt = require('jsonwebtoken')


const registerUser = async (data) => {

    try {
        
        const { username, email, password } = data
        const user = new User({ 
            username, 
            email, 
            password: await bcrypt.hash(password, 12)
        })
        await user.save()

        return user

    } catch (error) {
        return error
    }

}


const userLogin = async (data) => {
    try {
        
        const { email, password } = data
        const user = await User.findOne({ email })
        if (!user) return new UserInputError('wrong credetials')
        const passwordCheck = await bcrypt.compare(password, user.password)
        if(!passwordCheck) return new UserInputError('wrong credetials')

        const token = jwt.sign({ _id: user._id }, 'jhgsudfdgfyudfukdf')

        return { token }

    } catch (error) {
        return error
    }
}



module.exports = {
    registerUser,
    userLogin
}