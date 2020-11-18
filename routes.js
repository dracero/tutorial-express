const express = require("express")
const Post = require("./models/Post") // new
const router = express.Router()
var cors = require('cors')
var app = express()

app.use(cors())

// Get all posts
router.get("/posts", async (req, res) => {
	const posts = await Post.find({})
	res.send(posts)
})

module.exports = router
