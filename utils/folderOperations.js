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
module.exports = {
    createFolder,
    getAllFolder,
}