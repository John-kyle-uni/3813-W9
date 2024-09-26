const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main(){

    const uri = 'mongodb://localhost:27017';
    var prods = [
        {ID:"1", Name:"poison", Description: "drink to die for", Price: "10", Units: "200"},
        {ID:"2", Name:"mercury", Description: "drink to die for", Price: "15", Units: "100"},
        {ID:"3", Name:"cyanide", Description: "drink to die for", Price: "20", Units: "150"}
    ]

    try 
    {
        await client.connect();
        const database = client.db("mydb");
        const collection = database.collection("products");
        const add = await collection.insertMany(prods);
        console.log("collection added")
    
    } catch (err)
    {
        console.error(err);
    } finally {
        await client.close();
    }

}
main().catch(console.error);
