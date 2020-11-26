const express = require("express")
const Post = require("./models/Post") // cuando defino el model pongo el nombre de la collection y las variables del schema
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

router.put("/update", async (req, res) => {
	let id = req.query.id
	let nombre = req.query.nombre;
	/*let apellido = req.query.apellido;
	let email = req.query.email;
	let dni = req.query.dni;*/
	const update = await Post.findByIdAndUpdate({_id:id},  {nombre:nombre},{ new: true })/*,
					      {apellido:apellido},
					      {email:email},
					      {dni:dni},
					      {multi:true})*/
	res.send(update)
})

module.exports = router
