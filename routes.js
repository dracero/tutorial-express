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

router.get("/update", async (req, res) => {
	let id = req.query.id
	let nombre = req.query.nombre;
	let apellido = req.query.apellido;
	let email = req.query.email;
	let dni = req.query.dni;
	const update = await Post.findByIdAndUpdate(id,{nombre:nombre,apellido:apellido,email:email,dni:dni}, { useFindAndModify: false })
	//http://express-tutorial-20.herokuapp.com/api/update?id=5fb5707db5f5d3a910d43c20&nombre=Diego&apellido=Racero&email=diego.racero@hotmail.com&dni=21738764
	//hay que armar esa URL
	res.send(update)
})

router.get("/ingreso", async (req, res) => {
	let nombre = req.query.nombre;
	let apellido = req.query.apellido;
	let email = req.query.email;
	let dni = req.query.dni;
	new Post({nombre:nombre,apellido:apellido,email:email,dni:dni}).save(function (error, data) {
           // handle errors, log success etc.
           res.send(data)
           });
	//http://express-tutorial-20.herokuapp.com/api/ingreso?nombre=Diego&apellido=Racero&email=diego.racero@hotmail.com&dni=21738764
	//hay que armar esa URL
})

router.get("/del", async (req, res) => {
	let email = req.query.email;
	const del = await Post.deleteOne({email:email})
	res.send(del)
})


module.exports = router
