const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDef =  protoLoader.loadSync('DMS.proto', {});
const grpcObject =  grpc.loadPackageDefinition(packageDef);
const DMSPackage = grpcObject.DMSPackage;



// const DMSDefinition = grpc.load(require('path').resolve('./proto/DMS.proto'));
const tableDao = require('./database/tableDao');

function createFolder(data,callback){
    console.log(data);
    return callback(null,tableDao.createFolder(data));
};
const server = new grpc.Server();
server.addService(DMSPackage.DMSService.service,{
        "createFolder": createFolder
    });

server.bindAsync('0.0.0.0:40000',grpc.ServerCredentials.createInsecure(),(err,port)=>{
    if(err){
        return console.error(err);
    }
    console.log(`connected to port ${port}`);
    server.start();
});    