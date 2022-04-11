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
    let err = null;
    console.log(call.request);
    try{
        await tableDao.deleteFile(call.request);
    }
    catch(e){
        err=e;
    }
    return callback(err,{});
}
async function moveFile(call,callback){
    console.log(call.request);
    const data = {};
    data.parent=call.request.parent;
    const file = await tableDao.moveFile(call.request._id,data);
    return callback(null,file);
}
async function getFiles(call,callback){
    const res = {}
    console.log(call.request);
    const files = await tableDao.getAllFiles(call.request);
    res.files = files;
    console.log(res);
    return callback(null,res);
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