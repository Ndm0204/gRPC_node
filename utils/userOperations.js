const tableDao = require('../database/tableDao');
async function createUser(call,callback){
    let err = null;
    let user = null;
    try{
        user = await tableDao.createUser(call.request);
    }catch(e){
        err = e;
    }
    return await callback(err,user);
};
async function getUser(call,callback){
    let err = null;
    let user = null;
    try{
        user = await tableDao.getUser(call.request);
    }catch(e){
        err = e;
    }
    return await callback(err,user);
}
module.exports = {
    createUser,
    getUser,
}