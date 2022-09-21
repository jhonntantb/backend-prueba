const {Wishlist,Product,Productimage,Stock} = require('../db')
const router = require('express').Router();
const { Op } = require("sequelize");

router.get("/:id",function(req,res,_next){
    console.log("entro")
    console.log(req.params.id)
    Wishlist.findAll({where: {
        userId: {
           [Op.like]: `%${req.params.id}%`
         }
       },
        include: [{model:Product,include:[{ model: Productimage},{ model: Stock } ] }]

       
        })
       .then(wish => res.status(200).json(wish))
       .catch(error => res.status(400).send(error))
 
 })

router.post("/",async function(req,res,_next){
    Wishlist.create({
        productId:req.body.productId,
        userId:req.body.userId
    })
    .then( () =>{
        res.status(200).json("creado exitosamente")
    })
    .catch(()=>{
        res.status(400).json("Error en la creacion")
    })

})

router.delete("/:productId/:userId",async function (req,res,next){
    console.log(req.params)
   await Wishlist.destroy( {
       where: {
           productId:req.params.productId,
           userId:req.params.userId
       }
   }).then(() => {
       res.status(200).json("borrado exitosamente")
   }).catch((err) => next(err)) 
})

module.exports = router;