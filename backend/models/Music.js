const mongoose = require('mongoose');

const MusicSchema = new mongoose.Schema({
    sender:{
        type : String
    },
    artist:{
        type : String
    },
    title: {
        type : String
    },
    isPlayed : {
        type : Boolean
    },
    isPlaying : {
        type : Boolean
    }
})

const MusicModel = mongoose.model('Music', MusicSchema);

module.exports = MusicModel;