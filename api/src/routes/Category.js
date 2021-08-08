const {Category} = require ('../db');
const router = require('express').Router();
const { Op } = require("sequelize");

router.get("/",function(_req,res){
    Category.findAll().then(Category => res.status(200).json(Category)).catch(error => res.status(400).send(error))
})

router.post("/",function(req,res,_next){
    //console.log(req.query.name)
    Category.create({
                    name:req.query.name,
                    })      
.then( () =>{
    res.status(200).json("creado exitosamente")
})

})

router.delete("/:id",async function (req,res,next){
    //console.log("REQ CATEGORY: ",req.params)
   await Category.destroy( {
       where: {
           id:req.params.id
       }
   }).then(() => {
       res.status(200).json("borrado exitosamente")
   }).catch((err) => next(err)) 
})

/*router.delete("/", (req, res) => {
    console.log("REQ DELETE: ",req)
    Category.findOne({
        where: {
            id: req.body.category.id
        }
    })
    .then(category => category.update({
        active: false
    }))
    .then(() => res.status(200).json("Eliminado exitosamente"))
    .catch(error => res.status(400).send(error))
})*/



module.exports = router;