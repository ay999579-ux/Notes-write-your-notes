const mongoose = require('mongoose')




async function mongodb(){
    try{
        await mongoose.connect(`mongodb://127.0.0.1:27017/CURD`)
        console.log('✅ DataBase is conneted')
    } catch(error){
        console.log('❌ DataBase is disconnet', error)
    }
}

module.exports = mongodb