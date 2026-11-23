
import "dotenv/config";
import mongoose from "mongoose";
import { connectToDatabase } from "../database/mongoose";

const testDatabaseConnection = async () => {
  try {
    console.log("Testing MongoDB connection...");

    const connection = await connectToDatabase();

    if (connection && connection.connection.readyState === 1) {
      console.log("SUCCESS: MongoDB connected!");
      console.log("Database:", connection.connection.name);
      console.log("Host:", connection.connection.host);
    } else {
      console.log("FAILED: MongoDB is not connected.");
    }
  } catch (error) {
    console.error("FAILED: MongoDB connection error.");

    if (error instanceof Error) {
      console.error(error.message);
    }

    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

testDatabaseConnection();
