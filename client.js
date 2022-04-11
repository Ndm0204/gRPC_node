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

// client.createFile({
//     name:'file3',
//     content:'Testing this application 2',
//     parent:'',
//     owner:'54f0d030-b8cc-11ec-a40b-2940da2a6b83'
//     },(err,data)=>{
//         if(err) throw err;
//         console.log(data);}
// )
// client.getFiles({_id:'2cd6e9c0-b95a-11ec-87f4-6b3146739266'},
// (err,data)=>{
//     if(err) console.log(err);
//     console.log(data);
// })
client.moveFile({
    _id:'ab6b2110-b95b-11ec-92c9-b5abfc444e63',
    parent:'2cd6e9c0-b95a-11ec-87f4-6b3146739266'
},(err,data)=>{
    if(err) console.log('error while moving file');
    console.log(data);
})