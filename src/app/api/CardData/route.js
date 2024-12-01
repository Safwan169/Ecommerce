import { NextResponse } from "next/server"

export const GET = async ()=>{

     const cardData=[
        {
          "id": 1,
          "name": "Smartphones",
          "products": [
            {
              "id": 101,
              "name": "iPhone 14 Pro",
              "brand": "Apple",
              "price": 1199.99,
              "description": "The latest iPhone with A16 Bionic chip, 48MP camera, and Dynamic Island.",
              "image": "https://i.ibb.co.com/VTRX5t6/kader.jpg",
              "rating": 4.8,
              "stock": 15,
              "specifications": {
                "display": "6.1-inch OLED",
                "battery": "3200mAh",
                "storage": "128GB",
                "camera": "48MP + 12MP + 12MP",
                "processor": "A16 Bionic chip"
              }
            },
            {
              "id": 102,
              "name": "Samsung Galaxy S23 Ultra",
              "brand": "Samsung",
              "price": 1249.99,
              "description": "High-performance phone with 200MP camera and S-Pen support.",
              "image": "https://i.ibb.co.com/VTRX5t6/kader.jpg",
              "rating": 4.9,
              "stock": 20,
              "specifications": {
                "display": "6.8-inch AMOLED",
                "battery": "5000mAh",
                "storage": "256GB",
                "camera": "200MP + 12MP + 10MP + 10MP",
                "processor": "Snapdragon 8 Gen 2"
              }
            }
          ]
        },
        {
          "id": 2,
          "name": "Laptops",
          "products": [
            {
              "id": 201,
              "name": "MacBook Pro 16",
              "brand": "Apple",
              "price": 2499.99,
              "description": "Powerful laptop with M2 Max chip and 16-inch Retina display.",
              "image": "https://i.ibb.co.com/VTRX5t6/kader.jpg",
              "rating": 4.7,
              "stock": 10,
              "specifications": {
                "display": "16-inch Retina",
                "battery": "20 hours",
                "storage": "512GB SSD",
                "processor": "M2 Max",
                "RAM": "16GB"
              }
            },
            {
              "id": 202,
              "name": "Dell XPS 13",
              "brand": "Dell",
              "price": 1399.99,
              "description": "Compact and lightweight laptop with stunning InfinityEdge display.",
              "image": "https://i.ibb.co.com/VTRX5t6/kader.jpg",
              "rating": 4.5,
              "stock": 25,
              "specifications": {
                "display": "13.4-inch FHD+",
                "battery": "12 hours",
                "storage": "256GB SSD",
                "processor": "Intel i7 11th Gen",
                "RAM": "16GB"
              }
            }
          ]
        },
        {
          "id": 3,
          "name": "Watches",
          "products": [
            {
              "id": 301,
              "name": "Apple Watch Series 8",
              "brand": "Apple",
              "price": 399.99,
              "description": "Advanced health and fitness tracking with temperature sensor.",
              "image": "https://i.ibb.co.com/VTRX5t6/kader.jpg",
              "rating": 4.8,
              "stock": 30,
              "specifications": {
                "display": "1.9-inch Retina",
                "battery": "18 hours",
                "features": ["Heart rate monitor", "Sleep tracking", "GPS"],
                "compatibility": "iOS"
              }
            },
            {
              "id": 302,
              "name": "Samsung Galaxy Watch 5",
              "brand": "Samsung",
              "price": 299.99,
              "description": "Durable and stylish smartwatch with long battery life.",
              "image": "https://i.ibb.co.com/VTRX5t6/kader.jpg",
              "rating": 4.6,
              "stock": 40,
              "specifications": {
                "display": "1.4-inch AMOLED",
                "battery": "40 hours",
                "features": ["Heart rate monitor", "Sleep tracking", "GPS"],
                "compatibility": "Android/iOS"
              }
            }
          ]
        }
      ]



      const productsData =cardData.flatMap(data=>data.products)
   return   NextResponse.json({productsData})
    
}