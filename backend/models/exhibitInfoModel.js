import mongoose from "mongoose";

const exhibitSchema = mongoose.Schema({
   title: { type: String }, 
   subtitle: { type: String }, 
   floor: { type: Number, default: 0},
   date: { type: Number }, 
   date: { type: String }, 
   image: { type: String }, 
   imgCaption: { type: String}, 
   pageContent: {type: String},
   additionalResources: {type: String}, 
   tags: {type: String}, 
})

const ExhibitInfo = mongoose.model('exhibitSchema', exhibitSchema)

export default ExhibitInfo

//garlic, pappers, and water - natural pesticides//
