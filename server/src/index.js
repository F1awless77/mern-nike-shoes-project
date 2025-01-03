import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import authRoutes from './routes/auth.js'
import uploadRoutes from './routes/uploadRoutes.js'
import cartRoutes from './routes/cartRoutes.js'

dotenv.config();

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

// Connecting to MongoDB database
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
};

// Routes
app.use('/', authRoutes); // Auth Routes
app.use('/', uploadRoutes) // Upload Routes
app.use('/', cartRoutes) // Cart Routes

// Starting the server
app.listen(PORT, () => {
  connect();
  console.log(`Server is running on port ${PORT}`);
});
