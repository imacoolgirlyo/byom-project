const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nickname : {
        type : String
    }
})

const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;