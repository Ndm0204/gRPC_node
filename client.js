const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDef =  protoLoader.loadSync('DMS.proto', {});
const grpcObject =  grpc.loadPackageDefinition(packageDef);
const DMSPackage = grpcObject.DMSPackage;

const client = new DMSPackage.DMSService('localhost:40000', grpc.credentials.createInsecure());

// client.createFolder({
//     name:'folder',
//     parent:'',
//     owner:'54f0d030-b8cc-11ec-a40b-2940da2a6b83'},(err,data)=>{
//     if(err) throw err;
//     console.log(data);
    
// })

// client.getAll({
//     owner:'54f0d030-b8cc-11ec-a40b-2940da2a6b83'
// },(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

client.createFile({
    name:'file3',
    content:'Testing this application 2',
    parent:'',
    owner:'54f0d030-b8cc-11ec-a40b-2940da2a6b83'
    },(err,data)=>{
        if(err) throw err;
        console.log(data);}
)
// client.getFile({_id:'0c530cc0-b959-11ec-9b85-ed71eda4979a'},
// (err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
// })