const Itinerary= require ("../model/itineray.js")


const itineraryControllers = {
    getCities: async (req, res) => {
        let itinerary
        let error = null

        try {
            itinerary = await Itinerary.find()
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : { itinerary },
            success: error ? false : true,
            error: error
        })
    },

}

module.exports = itineraryControllers;

