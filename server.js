const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const app = express()
const cors = require('cors');
const routes = require("./routes")

// Connect to MongoDB database
mongoose
	.connect("mongodb+srv://brad123:brad123@cluster0.zf9fl.mongodb.net/udemy?retryWrites=true&w=majority", { useNewUrlParser: true })
	.then(() => {
		const app = express()
    app.use(cors())		
    app.use("/api", routes)

    //this is the server
    // listen for requests :)
    const listener = app.listen(process.env.PORT, () => {
    console.log("Your app is listening on port " + listener.address().port);
   });
});  
  
  
