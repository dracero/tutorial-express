const mongoose = require("mongoose")

const schema = mongoose.Schema({
	title: String,
	content: String
})

module.exports = mongoose.model("datos", schema)//el nombre que tiene que ir en el model es el de la collection
