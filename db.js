const mongoose = require('mongoose');
require('dotenv').config();

async function connectDb() {
    try {
        console.log('Connecting to database');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connection successful');
    } catch (e) {
        console.log(e);
    }
}

module.exports = connectDb;
