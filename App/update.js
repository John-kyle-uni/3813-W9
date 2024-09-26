const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main(){

    const uri = 'mongodb://localhost:27017';
    var upp = {ID: '1'}
    var val = { $set: {Name: "Water"} }
    try 
    {
        await client.connect();
        const database = client.db("mydb");
        const collection = database.collection("products");
        const update1 = await collection.updateOne(upp, val);
        console.log("updated")
    
    } catch (err)
    {
        console.error(err);
    } finally {
        await client.close();
    }

}
main().catch(console.error);