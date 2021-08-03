const {User} = require ('../db');
const router = require('express').Router();
const { Op } = require("sequelize");

router.get("/",function(_req,res){
    User.findAll().then(User => res.status(200).json(User)).catch(error => res.status(400).send(error))
})
router.post("/",function(req,res,_next){
   
    User.create({
                    user_name:req.body.name,
                    })      
.then( () =>{
    res.status(200).json("creado exitosamente")
})

})



module.exports = router;