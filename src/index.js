const express = require("express");
const morgan = require("morgan");

const app= express();

//DB
require("dotenv").config();//ni bien inicialize la api , se cargen todas las variables de entorno
require("./database");

//GLOBAL: ---------

//variable para tener acceso dentro de cualquier sitio 
app.set("port", process.env.PORT || 3000);

//Configuraciones
app.use(morgan("dev"));//nos muestra informacion necesaria simplificada
app.use(express.json()); //express que use json

//EndPoints
app.use(require("./routes"));
app.use(require("./routes/auth"));
app.use(require("./routes/movies"));

//Server
app.listen(app.get("port"), ()=>{
    console.log(`Server running at port ${app.get("port")}`);
});