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
    name: {type: String},
    isFile: {type:Boolean, default: false},
    createdOn: {type: Date, default: Date.now()},
    updatedOn: {type: Date, default: Date.now()},
    parent:{type: mongoose.Schema.Types.String, ref: 'folder', default: "/"},
    owner:{type: mongoose.Schema.Types.String, ref: 'user'},
    

});

folderSchema.index({ name: 1, owner:1 },{unique: true});

const folder = mongoose.model('folder',folderSchema);

module.exports = folder;