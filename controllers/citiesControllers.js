const Cities = require("../models/citiesModel.js")


const citiesControllers = {
    getCities: async (req, res) => {
        let cities
        let error = null

        try {
            cities = await Cities.find()
        }
        catch
        (err) { console.log(error = err)}


        res.json({
            response: error ? "Error" : { cities },
            success: error ? false : true,
            error: error
        })
    },

    getOneCity: async (req, res) => {
        const id = req.params.id
        let city
        let error = null

        try {
            city = await Cities.findOne({ _id: id }).populate("itinerary")
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : { city },
            success: error ? false : true,
            error: error
        })
    },

    addCity: async (req, res) => {
        const { name, country, currency, description } = req.body.data
        let city
        let error = null

        try {
            city = await new Cities({
                name: name,
                country: country,
                currency: currency,
                description: description
            }).save()
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : city,
            success: error ? false : true,
            error: error
        })

    },

    modifyCity: async (req, res) => {
        const id = req.params.id;
        const city = req.body.data;
        let citydb
        let error = null

        try {
            citydb = await Cities.findOneAndUpdate({ _id: id }, city, { new: true })
        }
        catch (err) { error = err }

        res.json({
            response: error ? "Error" : city,
            success: error ? false : true,
            error: error
        })
    },

    removeCity: async (req, res) => {
        const id = req.params.id
        let city
        let error = null

        try {
            city = await Cities.findOneAndDelete({ _id: id })
        }
        catch
        (err) { error = err }

        res.json({
            response: error ? "Error" : { city },
            success: error ? false : true,
            error: error
        })
    },

    addMultiplesCities: async (req, res) => {
        let error = []
        let cities = []
        for (let city of req.body.data) {
        try {
                let verifyCity = await Cities.find({ name: { $regex: city.name, $options: "i" } })
                if (verifyCity.length == 0) {
                    let dataCity = {
                        name: city.name,
                        country: city.country,
                        currency: city.currency,
                        language: city.language,
                        description: city.description,
                        image: city.image
                    }
                    await new Cities({
                        ...dataCity
                    }).save()
                    cities.push(dataCity)
                } else {
                    error.push({
                        name: city.name,
                        result: "Ya existe en la base de datos con el Id: " + verifyCity[0]._id
                    })
                }

            }
         catch (err) { error.push({name: city.name, err})}
        }
        res.json({
            response: error.length > 0 && cities.length === 0 ? "Error" : cities,
            success: error.length > 0 ? (cities.length > 0 ? "Warning" : false) : true,
            error: error
        })

    },


}
       
module.exports = citiesControllers
