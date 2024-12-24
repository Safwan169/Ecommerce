const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

require('dotenv').config()

const cors= require('cors')
app.use(cors(
  {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true
  }

));


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

async function run () {
   // Connect the client to the server	(optional starting in v4.7)
  //  await client.connect();
   const database= await client.db("Electron")
   const productsData = await database.collection("productsData")
  try {
   

   
  app.get("/CardData/:id",async(req,res)=>{


    const id =req.params.id
    console.log(id)

    let data
    if (id ==0){

      
      data = await productsData.aggregate([
      {$unwind:'$products'},
      {$sort:{'products.add_date':-1}},
      {
        $project:{
          products:'$products'
        }
      }
     ]).toArray()

    }
    if(id==1){

    }
    if(id==2){


    }


    const products =  data?.flatMap(d=>d.products)
    console.log(products,'this is the data')

    res.send({products})


  })



  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.error);


app.get('/', (req, res) => {
  res.send(`Yeah baby you are connected`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})