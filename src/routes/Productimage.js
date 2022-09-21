const {Productimage} = require ('../db');
const router = require('express').Router();
const { Op } = require("sequelize");

router.get("/",function(_req,res){
    Productimage.findAll().then(Productimage => res.status(200).json(Productimage)).catch(error => res.status(400).send(error))
})

router.post("/",function(req,res,_next){
    //console.log(req.query.name)
    Productimage.create({
                    image_url:req.query.image_url,
                    })      
.then( () =>{
    res.status(200).json("creado exitosamente")
})

})

router.delete("/:id",async function (req,res,next){
    //console.log("REQ CATEGORY: ",req.params)
   await Productimage.destroy( {
       where: {
           id:req.params.id
       }
   }).then(() => {
       res.status(200).json("borrado exitosamente")
   }).catch((err) => next(err)) 
})

module.exports = router;