//crear la config de mongo db
const mongoose  = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true
})
.then(
    db => console.log("DB IS connected")
    )
.catch(
    error => console.log(error)
    );