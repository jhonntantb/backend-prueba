const {Category} = require ('../db');
const router = require('express').Router();
const { Op } = require("sequelize");

router.get("/",function(_req,res){
    Category.findAll().then(Category => res.status(200).json(Category)).catch(error => res.status(400).send(error))
})
router.post("/",function(req,res,_next){
   
    Category.create({
                    name:req.body.name,
                    })      
.then( () =>{
    res.status(200).json("creado exitosamente")
})

})



module.exports = router;