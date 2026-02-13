const mongoose = require('mongoose')

const userSchema =  mongoose.Schema({
    title: String,
    content: String
},{
    timestamps: true  // this line of code only use to see the when the user is created on date or time
})
const user = mongoose.model('user',userSchema)

module.exports = user