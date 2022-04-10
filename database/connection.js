const mongoose = require('mongoose');

class MongoDb{
    connection = mongoose.connection;
    constructor(){
        try{
            this.connection
            .on('open', console.info.bind(console, 'Database connection: open'))
            .on('close', console.info.bind(console, 'Database connection: close'))
        }
        catch(error){
            console.error(error);
        }
    }
    async connect(){
        try{
            await mongoose.connect(
                'mongodb+srv://:@cluster0.ra5t3.mongodb.net/DMS?retryWrites=true&w=majority',
                {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
                }
              );
              console.info.bind('connected');
        }
        catch(err){
            console.error(err);
        }
    }
    async close() {
        try {
          await this.connection.close();
        } catch (error) {
          console.error(error);
        }
      }
}

module.exports = new MongoDb();