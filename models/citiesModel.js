const mongoose=require("mongoose")

//ESQUEMA A UTILIZAR

const citiesSchema= new mongoose.Schema({
    name:{type:String, required:true},
    country:{type:String, required:true},
    currency:{type:Number, required:true},
    language:{type:String, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    itinerary:[{type:mongoose.Schema.Types.ObjectId, ref:"itineraries"}]
})


//POPULACION

const itinerarySchema= new mongoose.Schema({
    _id:{type:mongoose.Types.ObjectId},
    nameItinerary:{type:String, required:true},
    nameUser: {type:String, required:true},
    userImage: {type:String, required:true},
    price: {type:Number, required:false},
    duration: {type:String, required:true},
    hashtag: {type:String, required:true},
    imageItinerary: {type:String, required:true},
    description:{type:String, required:true}
})

// CONTRA LA COLECCION, EN ESTE CASO "cities"

const Cities= mongoose.model("cities",citiesSchema)
const Itinerary= mongoose.model("itineraries",itinerarySchema)


module.exports=Cities