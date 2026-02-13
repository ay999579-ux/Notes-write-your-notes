const mongoose = require('mongoose')
require('dotenv').config()

async function mongodb() {
  try {
    const uri = process.env.MONGO_URI

    if (!uri) {
      throw new Error("MONGO_URI missing")
    }

    await mongoose.connect(uri)
    console.log('✅ DataBase is connected')
  } catch (error) {
    console.log('❌ DataBase is disconnect', error.message)
    process.exit(1)   // stop server if DB fails
  }
}

module.exports = mongodb
