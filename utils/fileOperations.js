const tableDao = require('./database/tableDao');

async function createFile(call,callback){
    console.log(call.request);
    const file = await tableDao.createFile(call.request);
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
async function getAllRootLevelFiles(call){

}
module.exports = {
    createFile,
    deleteFile,
    moveFile,
    getFiles,
    getAllRootLevelFiles
}