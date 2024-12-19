const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

require('dotenv').config()



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@cluster0.6zehkma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
   const database= await client.db("Electron")

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


app.get('/', (req, res) => {
  res.send(`Yeah baby you are connected`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})