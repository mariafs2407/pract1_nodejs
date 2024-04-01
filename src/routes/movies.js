const { Router }= require("express");
const Movies = require("../models/Movies");

const router = Router();

//get all
router.get("/api/movies",async (req,res)=>{
    const movies = await Movies.find();//devuelve todas las peliculas
    res.json(movies);
});

//get by Id
router.get("/api/movies/:id",async (req,res)=>{
    //console.log(req.params);    
    const {id} = req.params;
    console.log(id);

    const movie = await Movies.findById(id);
    res.json(movie)
})

//get by title
router.get("/api/movies/title/:title",async (req,res)=>{   
    const {title} = req.params;
    console.log(title);

    const movie = await Movies.find({title : title});
    res.json(movie)
})

//create movie
router.post("/api/movies",async (req,res) =>{
    try{
        const {title,year,rate,director} = req.body;
        const newMovies = await Movies({
            title : title,
            year : year,
            rate : rate,
            director : req.body.director,
        });
        newMovies.save();
        res.json({msg: "post method"})
    }catch(error){
        res.status(500).json({msg:error});
    }
    
})

//put movies
router.put("/api/movies/:id",async (req,res) =>{
    const {id} = req.params;
    const updatemovie = req.body;
    
    await Movies.findByIdAndUpdate(id, updatemovie);
    const movies = await Movies.find();
    res.json(movies)
})

module.exports= router;