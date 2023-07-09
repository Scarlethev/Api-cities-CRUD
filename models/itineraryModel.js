const mongoose=require("mongoose")

const itinerarySchema= new mongoose.Schema({
    nameOfItinerary:{type:String, required:true},
    nameUser: {type:String, required:true},
    userImage: {type:String, required:true},
    price: {type:Number, required:true},
    duration: {type:String, required:true},
    hashtag: {type:String, required:true},
    imageItinerary: {type:String, required:true},
    description:{type:String, required:true}
})

const Itinerary= mongoose.model("itinerary",itinerarySchema)

console.log(Itinerary)


module.exports=Itinerary