const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

require("dotenv").config();

const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000", "https://electron-nu.vercel.app"],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGODB_USER_NAME}:${process.env.MONGODB_PASSWORD}@cluster0.6zehkma.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  // Connect the client to the server	(optional starting in v4.7)
  //  await client.connect();
  const database = await client.db("Electron");
  const productsData = await database.collection("productsData");
  try {
    app.get("/CardData/:id", async (req, res) => {
      const id = req.params.id;
      console.log(id);

      let data;
      if (id == 0) {
        // this is for new products section
        data = await productsData
          .aggregate([
            { $unwind: "$products" },
            { $sort: { "products.add_date": -1 } },
            {
              $project: {
                _id: 0,
                products: "$products",
              },
            },
          ])
          .toArray();
      }
      if (id == 1) {
        // this is for featured products section
        data = await productsData
          .aggregate([
            { $unwind: "$products" }, // Unwind the products array
            {
              $match: {
                "products.isFeatured": "true", // Filter for isFeatured = true
              },
            },
            { $sort: { "products.add_date": -1 } }, // Sort by add_date in descending order
            {
              $project: {
                _id: 0,
                products: "$products", // Project only the products field
              },
            },
          ])
          .toArray();

        console.log(data);

        // console.log(da,"this is for featured products ")
      }
      if (id == 2) {
        // this is just for demo  purposes
        data = await productsData
          .aggregate([
            { $unwind: "$products" },
            { $sort: { "products.add_date": -1 } },
            {
              $project: {
                _id: 0,
                products: "$products",
              },
            },
          ])
          .toArray();

        // this is for best seller button when payment is done then i add a field  which is sell product then i found the product which was the best seller product
      }

      const products = data?.flatMap((d) => d.products);

      // console.log(data,'this is the data for the products')
      // console.log(products, "this is the data");

      res.send({ products });
    });

    // this is for special product
    app.get("/specialProducts", async (req, res) => {
      const data = await productsData
        .aggregate([
          { $unwind: "$products" },
          {
            $sort: { "products.discount": -1 },
          },
          {
            $project: {
              _id: 0,
              products: "$products",
            },
          },
        ])
        .toArray();
      //  console.log(data,'special purposes')

      const products = data.flatMap((d) => d.products);
      console.log(products);

      res.send({ products });
    });

    //  for search value
    app.get("/search", async (req, res) => {
      const searchValue = req.query.value;
      console.log(searchValue, "search value");

      let data;
      if (searchValue == "all") {
        data = await productsData.find().toArray();
      } else {
        const query = {
          $or: [
            { Category: { $regex: searchValue, $options: "i" } },
            { "products.name": { $regex: searchValue, $options: "i" } },
            { "products.brand": { $regex: searchValue, $options: "i" } },
          ],
        };

        data = await productsData.find(query).toArray();

        // console.log(data,'this is from search section ')
      }

      const products = data?.flatMap((d) => d?.products);
      console.log(products);
      res.send(products);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

run().catch(console.error);

app.get("/", (req, res) => {
  res.send(`Yeah baby you are connected`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
