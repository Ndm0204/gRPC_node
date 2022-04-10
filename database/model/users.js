const mongoose = require('mongoose');
const {
    v1: uuid   
} = require('uuid');

const userSchema =  new mongoose.Schema({
    _id: { type: String, default: function genUUID() {
        return uuid()
    }},
    username: {type:String, required: true},
    name: {type: String, required: true}
})

userSchema.index({ username: 1 },{unique: true});
const user = mongoose.model('user',userSchema);

module.exports = user;