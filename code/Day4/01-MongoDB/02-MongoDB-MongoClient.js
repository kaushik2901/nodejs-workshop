const { MongoClient } = require('mongodb');
const uri = "mongodb://localhost:27017"

// // Callback syntax

// MongoClient.connect(uri, (err, client) => {
//     if (err) return console.error(err);

//     const db = client.db("test");

//     db.collection('customers')
//         .find({})
//         .toArray((err, data) => {
//             if (err) return console.error(err);
//             console.log(data);
//         })
// })

const main = async () => {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        const db = client.db("test");

        // Find / Read
        const data = await db.collection('customers').find({}).toArray();
        console.log(data);

        // Insert / Create
        const insertResponse = await db.collection('customers')
            .insertOne({
                name: "Test User",
                age: 22,
                gender: "Male"
            });
        console.log(insertResponse, "New User Created");

        // Update
        const updateResponse = await db.collection('customers')
            .updateOne({ name: "Test User" }, {
                $set: {
                    name: "Test User Updated"
                }
            });
        console.log(updateResponse, "User Updated");

        // Delete
        const deleteResponse = await db.collection('customers').deleteOne({ name: "Test User Updated" });
        console.log(deleteResponse, "User Removed");

        client.close();

    } catch (error) {
        console.error(error);
    } finally {
        process.exit(0);
    }
}

main();