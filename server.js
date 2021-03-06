const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDef =  protoLoader.loadSync('DMS.proto', {});
const grpcObject =  grpc.loadPackageDefinition(packageDef);
const DMSPackage = grpcObject.DMSPackage;

const Folder =  require('./utils/folderOperations');
const User = require('./utils/userOperations')
const File =  require('./utils/fileOperations');

const server = new grpc.Server();

server.addService(DMSPackage.DMSService.service,{
        "createFolder": Folder.createFolder,
        "getFolder": Folder.getFolder,
        "deleteFolder": Folder.deleteFolder,
        "createFile": File.createFile,
        "deleteFile": File.deleteFile,
        "moveFile": File.moveFile,
        "getFiles": File.getFiles,
        "getFile": File.getFile,
        "getAll": getAll,
        "createUser": User.createUser,
        "getUser": User.getUser,
    });

async function getAll(call,callback){
    let errObj = null;
    const res = {};
    try{
        res.files = await File.getAllRootLevelFiles(call.request);
        res.folders = await Folder.getAllFolder(call.request);
        console.log(res); 
    }
    catch(err){
        errObj = err;
    } 
    return callback(errObj,res);

}
server.bindAsync('0.0.0.0:40000',grpc.ServerCredentials.createInsecure(),(err,port)=>{
    if(err){
        return console.error(err);
    }
    console.log(`connected to port ${port}`);
    server.start();
});    