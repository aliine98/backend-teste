const mongoose = require('mongoose');

const WomanSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('woman', WomanSchema);
