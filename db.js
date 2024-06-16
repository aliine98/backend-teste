const mongoose = require('mongoose');

async function connectDb() {
    try {
        console.log('Connecting to database');
        await mongoose.connect(
            'mongodb+srv://alinebevilacqua:36BUBMFWesCCRfnC@clustermulheres.3xtbljm.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMulheres'
        );
        console.log('Connection successful');
    } catch (e) {
        console.log(e);
    }
}

module.exports = connectDb;
