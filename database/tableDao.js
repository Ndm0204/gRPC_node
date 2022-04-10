const mongoose = require('mongoose');
// const db = require('./connection');
const User = require('./model/users');
const Folder = require('./model/folders');
const File = require('./model/files');
const file = require('./model/files');

mongoose.connect(
    'mongodb+srv://root:<password>@cluster0.ra5t3.mongodb.net/DMS?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
createFolder({
    name:'folder',
    parent:'./',
    owner:'54f0d030-b8cc-11ec-a40b-2940da2a6b83'});

async function createUser(data){
    try{
        const user = new User(data);
        await user.save();
        console.log(user);
    }
    catch(err){
        console.log(err);
        if(err.code == 11000){

        }
    }
}

async function createFolder(data){
    try{
        const folder = new Folder(data);
        console.log("early:",folder);
        await folder.save();
        console.log(folder);
        return folder;
    }
    catch(err){
        console.log(err);
        if(err.code == 11000){

        }
    }
}

async function createFile(data){
    try{
        const file = new File(data);
        await file.save();
        console.log(file);}
    catch(err){
        console.log(err);
        if(err.code == 11000){

        }
    }
}
async function moveFile(id,data){
    try{
        file = await file.findByIdAndUpdate(id, data);
        console.log(file);
    }
    catch(err){
        console.log(err);
    }
}

async function updateFile(id,data){
    try{
        file = await file.findByIdAndUpdate(id, data);
        console.log(file);
    }
    catch(err){
        console.log(err);
    }
}

async function deleteFile(id){
    try{
        await file.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
}

module.exports={
    createFile,
    createUser,
    createFolder,
    moveFile,
    updateFile,
    deleteFile,
}