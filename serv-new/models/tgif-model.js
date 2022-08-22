const mongoose = require('mongoose');

const TgifSchema = new mongoose.Schema({
    Title: {
        type: String, 
        required : [true, 'must provide Title'],
        trim: true,
    },
    Abstract: {
        type: String, 
        required : [true, 'must provide Abstract'],
        trim: true,
    },
    CampName: {
        type: String, 
        required : [true, 'must provide CampName'],
        trim: true,
    }
})

module.exports =  mongoose.model('TgifData', TgifSchema)