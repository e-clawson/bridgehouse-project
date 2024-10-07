import mongoose from "mongoose";

async function connectDB() {
    try{
        mongoose.connect()
        console.log("mongoDV connected")
    } catch(e) {
        console.log(e)
    }
}

export default connectDB