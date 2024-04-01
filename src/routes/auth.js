const { Router } = require("express");
const jwt = require('jsonwebtoken');
const router = Router();

const secretKey = process.env.SECRET_KEY || "secret";

router.post("/api/login", (req, res) => {
    const { email, password} = req.body //toda la informacion que nos llega de la aplicacion cliente
    /*console.log(email);
    console.log(password)*/

    const user ={
        id:1,
        name: "maria",
        email: "mariafs@gmail.com",
        password: "1234"
    }

    if(email === user.email && password === user.password){
        jwt.sign({user: user}, secretKey,(error, token)=>{
            res.json(token);
        })
    }else{
        console.log(req.body)
        res.json({message: "email of password are invalid"});
    }

});

router.post("/api/users", verifyToken, (req,res)=>{
    jwt.verify(req.token, secretKey,{expiresIn: "30s"}, (error,data) =>{
        if(error){
            res.sendStatus(403);
        }else{
            res.json({
                message: "get all users",
                data
            })
        }
    })
    
});

function verifyToken(req,res,next){
    const header = req.headers["authorization"];

    if(header !== undefined){
        const token = header.split(" ")[1];
        req.token = token;

        next();
    }else{
        res.sendStatus(403);
    }
}

module.exports = router;
