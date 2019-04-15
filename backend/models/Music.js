import mongoose from 'mongoose';

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
    selected : {
        type : Boolean
    }
})

const model = mongoose.model('Music', MusicSchema);
export default model;