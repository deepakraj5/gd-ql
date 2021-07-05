const mongoose = require('mongoose')

const url = `mongodb+srv://sanjay_usr:sanjaydb@san0.vz1lm.mongodb.net/graphqldb?retryWrites=true&w=majority`

mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('db connected')
}).catch(() => {
    console.log('db not connected')
})