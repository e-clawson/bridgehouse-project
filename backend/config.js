import mongoose from "mongoose";

async function connectDB() {
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log("mongoDV connected")
    } catch(e) {
        console.log(e)
    }
}

export default connectDB