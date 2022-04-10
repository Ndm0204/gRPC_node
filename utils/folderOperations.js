const tableDao = require('./database/tableDao');

async function createFolder(call,callback){
    console.log(call.request);
    const folder = await tableDao.createFolder(call.request);
    return await callback(null,folder);
};
async function getAllFolder(call){
    
}
module.exports = {
    createFolder,
    getAllFolder,
}