const express = require("express")
const Post = require("./models/Post") // new
const router = express.Router()
var cors = require('cors')
var app = express()

app.use(cors())

// se llama con la siguiente URI: http://express-tutorial-20.herokuapp.com/api/posts?email=diego.racero@gmail.com
//si hubiere más parametros se separan por &
router.get("/posts", async (req, res) => {
	let email = req.query.email;
	const posts = await Post.find({email:email})
	res.send(posts)
})

module.exports = router
