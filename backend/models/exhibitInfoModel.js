import mongoose from "mongoose";

const exhibitSchema = mongoose.Schema({
   title: { type: String}, 
})

const exhibitInfo = mongoose.model('exhibitSchema', exhibitSchema)

export default exhibitInfo

 // title: { type: String}, 
    // subtitle: {type: String}, 
    // floor: { type: Number}, //add a default of 0? 
    // date: {type: String}, //still stuggling to decide if I want this to be a number or a string
    // //would like to be able to eventually sort by date so it might be better to do as a number, but 
    // //some data might not easily fit into one date - some have a broad range, or I want to be able to input/display the date 
    // //in a variety of ways ex: "may 1890", "may-october 1890", "1780 - 1800"
    // image: {type: String}, 
    // imgCaption: { type: String}, 
    // pageContent: {type: String}, 
    // additionalResources: {type: String}, 