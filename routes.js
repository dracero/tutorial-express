const express = require("express")
const Post = require("./models/Post") // new
const router = express.Router()
var cors = require('cors')
var app = express()

app.use(cors())

// Get all posts
router.get("/posts/:email", async (req, res) => {
	var email = req.params.email;
	const posts = await Post.find({})
	res.send(posts)
})

module.exports = router
