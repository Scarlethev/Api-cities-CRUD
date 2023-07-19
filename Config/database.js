const mongoose = require("mongoose")

//BUSCA LA VARIABLE DE AMBIENTE, LA CONEXION CON LA BASE DE DATOS 

mongoose.connect(process.env.MONGO_URI,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
})

.then(()=> console.log("Database conectada"))
.catch(err=> console.error(err))





