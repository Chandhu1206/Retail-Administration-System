const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb+srv://jaswanth123:jaswanth123@cluster0.ksh8r.mongodb.net/products")
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

const products = [
  {
    name: "Fresh Milk",
    description: "Pure and fresh cow milk, rich in nutrients.",
    price: 2.99,
    image: "http://localhost:5000/assets/freshmilk.jpeg",
    totalStock: 100,
    sold: 60,
    unsold: 40,
  },
  {
    name: "Whole Wheat Bread",
    description: "Soft and healthy whole wheat bread, great for sandwiches.",
    price: 3.49,
    image: "http://localhost:5000/assets/wholewheatbread.jpeg",
    totalStock: 80,
    sold: 50,
    unsold: 30,
  },
  {
    name: "Organic Eggs",
    description: "Farm fresh organic eggs, a great source of protein.",
    price: 4.99,
    image: "http://localhost:5000/assets/organic-eggs.jpeg",
    totalStock: 90,
    sold: 70,
    unsold: 20,
  },
  {
    name: "Fresh Tomatoes",
    description: "Ripe and juicy red tomatoes, perfect for cooking.",
    price: 2.49,
    image: "http://localhost:5000/assets/tomatoes.jpeg",
    totalStock: 120,
    sold: 80,
    unsold: 40,
  },
  {
    name: "Potatoes",
    description: "Fresh and organic potatoes, ideal for fries and curries.",
    price: 1.99,
    image: "http://localhost:5000/assets/potatoes.jpeg",
    totalStock: 150,
    sold: 90,
    unsold: 60,
  },
  {
    name: "Cheese",
    description: "Delicious dairy cheese, perfect for sandwiches and pizzas.",
    price: 6.99,
    image: "http://localhost:5000/assets/cheese.jpeg",
    totalStock: 50,
    sold: 30,
    unsold: 20,
  },
  {
    name: "Pasta",
    description: "Italian-style pasta, easy to cook and delicious.",
    price: 4.99,
    image: "http://localhost:5000/assets/pasta.jpeg",
    totalStock: 70,
    sold: 40,
    unsold: 30,
  },
  {
    name: "Chocolate",
    description: "Rich and creamy chocolate bar, perfect for snacking.",
    price: 2.99,
    image: "http://localhost:5000/assets/chocolate.jpeg",
    totalStock: 90,
    sold: 60,
    unsold: 30,
  },
  {
    name: "Coffee Beans",
    description: "Premium quality coffee beans for a perfect brew.",
    price: 8.99,
    image: "http://localhost:5000/assets/coffee.jpeg",
    totalStock: 40,
    sold: 25,
    unsold: 15,
  },
  {
    name: "Peanut Butter",
    description: "Smooth and creamy peanut butter, rich in protein.",
    price: 5.49,
    image: "http://localhost:5000/assets/peanutbutter.jpeg",
    totalStock: 60,
    sold: 35,
    unsold: 25,
  },
  {
    name: "Honey",
    description: "Pure organic honey, naturally sweet and healthy.",
    price: 9.99,
    image: "http://localhost:5000/assets/honey.jpeg",
    totalStock: 30,
    sold: 20,
    unsold: 10,
  },
  {
    name: "Oranges",
    description: "Fresh and juicy oranges, rich in vitamin C.",
    price: 3.99,
    image: "http://localhost:5000/assets/oranges.jpeg",
    totalStock: 110,
    sold: 70,
    unsold: 40,
  },
  {
    name: "Bananas",
    description: "Fresh organic bananas, great for snacking and smoothies.",
    price: 1.99,
    image: "http://localhost:5000/assets/bananas.jpeg",
    totalStock: 130,
    sold: 90,
    unsold: 40,
  },
  {
    name: "Apples",
    description: "Crisp and juicy apples, full of natural sweetness.",
    price: 4.49,
    image: "http://localhost:5000/assets/apples.jpeg",
    totalStock: 100,
    sold: 75,
    unsold: 25,
  },
  {
    name: "Strawberries",
    description: "Sweet and fresh strawberries, great for desserts.",
    price: 5.99,
    image: "http://localhost:5000/assets/strawberries.jpeg",
    totalStock: 90,
    sold: 60,
    unsold: 30,
  },
  {
    name: "Mangoes",
    description: "Sweet and juicy mangoes, full of tropical flavor.",
    price: 7.99,
    image: "http://localhost:5000/assets/mangoes.jpeg",
    totalStock: 80,
    sold: 50,
    unsold: 30,
  },
  {
    name: "Carrots",
    description: "Crunchy and fresh carrots, packed with nutrients.",
    price: 2.49,
    image: "http://localhost:5000/assets/carrots.jpeg",
    totalStock: 120,
    sold: 85,
    unsold: 35,
  },
  {
    name: "Spinach",
    description: "Fresh green spinach, rich in iron and vitamins.",
    price: 3.29,
    image: "http://localhost:5000/assets/spinach.jpeg",
    totalStock: 110,
    sold: 80,
    unsold: 30,
  },
  {
    name: "Almonds",
    description: "Crunchy and nutritious almonds, great for snacking.",
    price: 10.99,
    image: "http://localhost:5000/assets/almonds.jpeg",
    totalStock: 60,
    sold: 40,
    unsold: 20,
  },
  {
    name: "Cashews",
    description: "Delicious and creamy cashews, a perfect snack.",
    price: 12.99,
    image: "http://localhost:5000/assets/cashews.jpeg",
    totalStock: 50,
    sold: 30,
    unsold: 20,
  },
];

Product.insertMany(products)
  .then(() => {
    console.log("✅ Products seeded successfully!");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("❌ Error seeding products:", error);
  });
