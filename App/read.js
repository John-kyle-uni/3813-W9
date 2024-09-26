// const { MongoClient } = require('mongodb');
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main(){

    const uri = 'mongodb://localhost:27017';
    try 
    {
        await client.connect();
        const database = client.db("mydb");
        const collection = database.collection("products");
        const find = await collection.findOne();
        console.log("found")
    
    } catch (err)
    {
        console.error(err);
    } finally {
        await client.close();
    }

}
main().catch(console.error);
