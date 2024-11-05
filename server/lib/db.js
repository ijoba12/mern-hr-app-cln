import mongoose from "mongoose";

export const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.DB_URL, {
      dbName: "hr-app-cln",
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};
