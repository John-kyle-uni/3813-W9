const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main(){

    const uri = 'mongodb://localhost:27017';
    var del = {ID: '2'}
    try 
    {
        await client.connect();
        const database = client.db("mydb");
        const collection = database.collection("products");
        const delete1 = await collection.deleteOne(del);
        console.log("deleted")
    
    } catch (err)
    {
        console.error(err);
    } finally {
        await client.close();
    }

}
main().catch(console.error);
