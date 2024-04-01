const { Router } = require("express");
const router = Router();

router.get("/users", (req, res) => {
    let response = [
    { name: "maria",fullname: "flores",age: "23" },
    { name: "gerardo",fullname: "salazar",age: "25"}
    ];
    console.log(req.body);
    res.json({ response });
});

router.post("/users", (req, res) => {
    console.log(req.body);
    res.json({ msg: "Recibido" });
});

module.exports = router;
