const mongoose = require("mongoose")

const schema = mongoose.Schema({
	_id: objectId,
	title: String,
	content: String
})

module.exports = mongoose.model("Post", schema)
