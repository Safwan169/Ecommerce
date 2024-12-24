import { NextResponse } from "next/server"

export const GET = async ()=>{

  const cardData = [
    {
      "id": 1,
      "Category": "Smartphones",
      "products": [
        {
          "id": 101,
          "name": "iPhone 14 Pro",
          "brand": "Apple",
          "previousPrice": 1199.99,
          "discount": 5,
          "price": 1139.99,
          "description": "The latest iPhone with A16 Bionic chip, 48MP camera, and Dynamic Island.",
          "image": "https://i.ibb.co.com/4fpMmtN/i-Phone-14-Pro-Deep-Purple-7300.jpg",
          "rating": 4.8,
          "reviews_count": 1500,
          "stock": 15,
          "availability": "In Stock",
          "delivery_time": "3-5 business days",
          "sku": "SM101",
          "added_date": "2024-12-24",
          "specifications": {
            "display": "6.1-inch OLED",
            "battery": "3200mAh",
            "storage": "128GB",
            "camera": "48MP + 12MP + 12MP",
            "processor": "A16 Bionic chip",
            "warranty": "1 year"
          }
        }
      ]
    },
    {
      "id": 2,
      "Category": "Laptops",
      "products": [
        {
          "id": 201,
          "name": "MacBook Pro 16",
          "brand": "Apple",
          "previousPrice": 2499.99,
          "discount": 10,
          "price": 2249.99,
          "description": "Powerful laptop with M2 Max chip and 16-inch Retina display.",
          "image": "https://i.ibb.co.com/tz7fb7h/Apple-Mac-Book-Pro-16-featured.webp",
          "rating": 4.7,
          "reviews_count": 800,
          "stock": 10,
          "availability": "Limited Stock",
          "delivery_time": "7 business days",
          "sku": "LP201",
          "added_date": "2024-12-22",
          "specifications": {
            "display": "16-inch Retina",
            "battery": "20 hours",
            "storage": "512GB SSD",
            "processor": "M2 Max",
            "RAM": "16GB",
            "warranty": "2 years"
          }
        }
      ]
    },
    {
      "id": 3,
      "Category": "Watches",
      "products": [
        {
          "id": 301,
          "name": "Apple Watch Series 8",
          "brand": "Apple",
          "previousPrice": 399.99,
          "discount": 22,
          "price": 311.99,
          "description": "Advanced health and fitness tracking with temperature sensor.",
          "image": "https://i.ibb.co.com/bQZ4XJY/Apple-Watch-Series-8-GPS-Cellular-Midnight-4171.jpg",
          "rating": 4.8,
          "reviews_count": 1200,
          "stock": 30,
          "availability": "In Stock",
          "delivery_time": "2-4 business days",
          "sku": "WT301",
          "added_date": "2024-12-20",
          "specifications": {
            "display": "1.9-inch Retina",
            "battery": "18 hours",
            "features": ["Heart rate monitor", "Sleep tracking", "GPS"],
            "compatibility": "iOS",
            "warranty": "6 months"
          }
        }
      ]
    }
  ];
  



      const productsData =cardData.flatMap(data=>data.products)
   return   NextResponse.json({productsData})
    
}