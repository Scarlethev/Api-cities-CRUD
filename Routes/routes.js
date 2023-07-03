const Router= require("express").Router();

const citiesControllers= require("../controllers/citiesControllers");

const{getCities,getOneCity, removeCity, modifyCity, addCity,addMultiplesCities} = citiesControllers;


Router.route("/cities")
.get(getCities)
.post(addCity)


Router.route("/cities/:id")
.get(getOneCity)
.delete(removeCity)
.put(modifyCity)


Router.route("/multiplesCities")
.post(addMultiplesCities)

module.exports = Router;
