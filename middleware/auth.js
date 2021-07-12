const jwt = require('jsonwebtoken')
const User = require('../models/user')
const { AuthenticationError } = require('apollo-server')



const auth = (context) => {

    return new Promise(async (resolve, reject) => {
        try {
        
            const bearerToken = context.req.headers.authorization
            if(!bearerToken) throw new Error()
            const token = bearerToken.split('Bearer ')[1]
            if(!token) throw new Error()
            const verify = jwt.verify(token, 'jhgsudfdgfyudfukdf')
            if(!verify) throw new Error()
            const user = await User.findOne({ _id: verify._id })
            if(!user) return new Error()
    
            resolve(user)
    
        } catch (error) {
            reject(new AuthenticationError('Unauthorized Access'))
        }
    })

}



module.exports = {
    auth
}