import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    nickname : {
        type : String
    }
})

const model = mongoose.model('User', UserSchema);
export default model;