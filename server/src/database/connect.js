import mongoose from "mongoose";
import { configDotenv } from "dotenv";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log("MongoDB connection successful");
	} catch (error) {
		console.error("MongoDB connection failed");
		process.exit(1);
	}
};

export { connectDB };
