const mongoose = require('mongoose');
// const db = require('./connection');
const User = require('./model/users');
const Folder = require('./model/folders');
const File = require('./model/files');

mongoose.connect(
    'mongodb+srv://root:<password>@cluster0.ra5t3.mongodb.net/DMS?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  );
async function createUser(data){
    try{
        const user = new User(data);
        await user.save();
        console.log(user);
    }
    catch(err){
        console.log(err);
        if(err.code == 11000){
            return {message: "User is already Existed!", status:409 };
        }
    }
}

async function createFolder(data){
    try{
        const folder = new Folder(data);
        await folder.save();
        console.log(folder);
        return folder;
    }
    catch(err){
        console.log(err);
        if(err.code == 11000){
            throw new Error('Folder Already Exists!');
        }
    }
}

async function createFile(data){
    try{
        const file = new File(data);
        await file.save();
        console.log(file);
        return file;
    }
    catch(err){
        console.log(err);
        if(err.code == 11000){
            throw new Error('Folder Already Exists!');
        }
    }
}
async function moveFile(id,data){
    try{
        const file = await File.findByIdAndUpdate(id, data);
        console.log(file);
    }
    catch(err){
        console.log(err);
    }
}

async function updateFile(id,data){
    try{
        const file = await File.findByIdAndUpdate(id, data);
        console.log(file);
        return file;
    }
    catch(err){
        console.log(err);
    }
}
async function getFile(query){
    try{
        const file = await File.findOne(query);
        return file;
    }
    catch(err){
        console.log(err);
    }
}
async function deleteFile(id){
    try{
        await File.findByIdAndRemove(id);
    }
    catch(err){
        console.log(err);
    }
}
async function getAllFiles(folderId){
    try{
        const files = await File.find(folderId);
        return files;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
async function getAllRootFiles(query){
    try{
        query.parent = ''
        const files = await File.find(query);
        return files;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
async function getAllFolders(query){
    try{
        query.parent = ''
        console.log(query);
        const folders = await Folder.find(query);
        console.log(folders);
        return folders;
    }
    catch(err){
        console.log(err);
        throw err;
    }
}
module.exports={
    createFile,
    createUser,
    createFolder,
    moveFile,
    updateFile,
    deleteFile,
    getAllFiles,
    getAllRootFiles,
    getAllFolders,
    getFile,
}