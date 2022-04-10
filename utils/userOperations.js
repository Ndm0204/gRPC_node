const tableDao = require('./database/tableDao');

async function createUser(call,callback){
    console.log(call.request);
    const user = await tableDao.createUser(call.request);
    return callback(null,user);
};

module.exports = {
    createUser,
}