const RouterItinerary= require("express").Router();

const itineraryControllers= require("../controllers/itineraryControllers");

const{getItinerary,addItinerary} = itineraryControllers;


Router.route("/Itinerary")
.get(getItinerary)
.post(addItinerary)


module.exports = RouterItinerary;