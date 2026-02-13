const mongoose = require('mongoose')

require('dotenv').config()


async function mongodb(){
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('✅ DataBase is conneted')
    } catch(error){
        console.log('❌ DataBase is disconnet', error)
    }
}

module.exports = mongodb