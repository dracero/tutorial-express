const express = require("express")
const Post = require("./models/Post") // new
const router = express.Router()

// Get all posts
router.get("/posts", async (req, res) => {
	const posts = await Post.find({})
	res.send(posts)
	console.log("hola")
})

module.exports = router
