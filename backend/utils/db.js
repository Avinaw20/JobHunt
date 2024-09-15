import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Mongo Db connected successfully');
    } catch (error) {
        console.log(error);
        console.log("Mongo Db connection failed");
    }
}

export default connectDB;