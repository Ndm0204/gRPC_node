const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDef =  protoLoader.loadSync('DMS.proto', {});
const grpcObject =  grpc.loadPackageDefinition(packageDef);
const DMSPackage = grpcObject.DMSPackage;

const client = new DMSPackage.DMSService('localhost:40000', grpc.credentials.createInsecure());

client.createFolder({
    name:'folder3',
    parent:'./',
    owner:'54f0d030-b8cc-11ec-a40b-2940da2a6b83'},(err,data)=>{
    if(err) throw err;
    console.log(JSON.stringify(data));
    
})