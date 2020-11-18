const mongoose = require("mongoose")

const schema = mongoose.Schema({
	nombre: String,
	apellido: String,
	email: String,
	dni:Number
})

module.exports = mongoose.model("datos", schema)//el nombre que tiene que ir en el model es el de la collection, no puede ser con mayúsculas
