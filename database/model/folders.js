const mongoose = require('mongoose');
const {
    v1: uuid   
} = require('uuid');

const user = require('./users');
const file = require('./files');
const folderSchema =  new mongoose.Schema({
    _id: { type: String, default: function genUUID() {
        return uuid()
    }},
    name: {type: String, unique: true, required: true},
    content: {type: String},
    isFile: {type:String, default: false},
    createdOn: {type: Date, default: Date.now()},
    updatedOn: {type: Date, default: Date.now()},
    owner:{type: mongoose.Schema.Types.String, ref: 'user'},
    Parent:{type: mongoose.Schema.Types.String, ref: 'folder'},
    files:[{type: mongoose.Schema.Types.String, ref: 'file'}] 

});

const folder = mongoose.model('folder',folderSchema);

module.exports = folder;