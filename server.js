const express = require("express");
const cors = require("cors");
require("dotenv").config()
require("./Config/database")
require ("./Config/databaseItinerary")

const app = express();

const appItinerary = express();

const RouterItinerary= require ("./Routes/routesItinerary")
const PORTitinerary =process.env.PORT || 6000;

const Router= require("./Routes/routes")
const PORT = process.env.PORT || 5000;

console.log(PORT)
console.log(PORTitinerary)


//ITINERARY

appItinerary .use(cors())
appItinerary .set("portItinerary",PORTitinerary);

appItinerary .use(express.json())
appItinerary .use("/Api", RouterItinerary)

appItinerary.listen(PORTitinerary,()=> {
    console.log("SERVIDOR ITINERARY CORRIENDO EN PUERTO "+ appItinerary.get("portItinerary"))
})

//CITIES
app.use(cors())
app.set("port",PORT);

app.use(express.json())
app.use("/Api", Router)


app.listen(PORT,()=> {
    console.log("SERVIDOR CORRIENDO EN PUERTO "+ app.get("port"))

})