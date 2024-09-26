const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

async function main() {

    const uri = "mongodb://localhost:27017";

    try {
        await client.connect();

        const database = client.db("mydb");

        const collection = await database.createCollection("products");

        console.log(`Collection created: ${collection.collectionName}`);
    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection
        await client.close();
    }
}

main().catch(console.error);
