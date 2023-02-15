const { MongoClient } = require('mongodb')
const connectionUrl = process.env.DB_CONNECTION||'mongodb://dockerdb:passwd@db:27017'

const dbName = process.env.DB_NAME||'notes'

const init = async () => {
  try {
   let client = await MongoClient.connect(connectionUrl)
   console.log('connected to database!', dbName)
   return client.db(dbName)
  }
  catch(err){
    console.log(err)
    return err
  }
}


module.exports = { init };
