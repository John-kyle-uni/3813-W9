const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'mydb';
async function main() {
    await client.connect();
    console.log('Connected successfully to server');   
    const db = client.db(dbName);
    const collection = db.collection ('products') ;

    // funOrders(client,collection)
    
    return 'done. '

    
}
main ()
    .then (console.log("main..."))
    .catch (console.error)
    .finally (() => client.close());