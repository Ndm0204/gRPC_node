const tableDao = require('../database/tableDao');

async function createFolder(call,callback){
    let err = null;
    let folder = null;
    try{
        folder = await tableDao.createFolder(call.request);
    }catch(e){
        err = e;
    }
    return await callback(err,folder);
};
async function getAllFolder(query){
    return tableDao.getAllFolders(query);
}
async function getFolder(call,callback){
    let err = null;
    let folder = null;
    try{
        folder = await tableDao.getFolder(call.request);
    }catch(e){
        err = e;
    }
    return await callback(err,folder);
};
async function deleteFolder(call,callback){
    let err = null;
    let folder = null;
    try{
        folder = await tableDao.deleteFolder(call.request._id);
    }catch(e){
        err = e;
    }
    return await callback(err,folder);
};
module.exports = {
    createFolder,
    getAllFolder,
    getFolder,
    deleteFolder,
}