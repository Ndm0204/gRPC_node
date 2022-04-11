const tableDao = require('../database/tableDao');

async function createFile(call,callback){
    
    let err = null;
    let file = null;
    try{
        file = await tableDao.createFile(call.request);
    }catch(e){
        err = e;
    }
    return await callback(err,file);
}
async function getFile(call,callback) {
    console.log(call.request);
    const file = await tableDao.getFile(call.request);
    return callback(null,file);
}
async function deleteFile(call,callback) {
    console.log(call.request);
    await tableDao.deleteFile(call.request);
    return callback(null,{});
}
async function moveFile(call,callback){
    console.log(call.request);
    await tableDao.moveFile(call.request);
    return callback(null,{});
}
async function getFiles(call,callback){
    console.log(call.request);
    await tableDao.getAllFiles(call.request);
    return callback(null,{});
}   
function getAllRootLevelFiles(query){
    
    return tableDao.getAllRootFiles(query);
    
}
module.exports = {
    createFile,
    deleteFile,
    moveFile,
    getFiles,
    getAllRootLevelFiles,
    getFile,
}