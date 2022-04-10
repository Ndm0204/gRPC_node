const mongoose = require('mongoose');
const {
    v1: uuid   
} = require('uuid');

const fileSchema =  new mongoose.Schema({
    _id: { type: String, default: function genUUID() {
        return uuid()
    }},
    name: {type: String, required: true},
    content: {type: String},
    isFile: {type:String, default: true},
    createdOn: {type: Date, default: Date.now()},
    updatedOn: {type: Date, default: Date.now()},
    parent:{type: mongoose.Schema.Types.String, ref: 'folder'},
    owner:{type: mongoose.Schema.Types.String, ref: 'user'} 

})
fileSchema.index({ name: 1, parent:1, owner: 1  },{unique: true});
const file = mongoose.model('file',fileSchema);

module.exports = file;