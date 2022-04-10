const tableDao = require('../database/tableDao');

async function createFolder(call,callback){
    console.log(call.request);
    const folder = await tableDao.createFolder(call.request);
    return await callback(null,folder);
};
async function getAllFolder(query){
    return tableDao.getAllFolders(query);
}
module.exports = {
    createFolder,
    getAllFolder,
}