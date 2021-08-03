const {Product,category_product,image,stock} = require ('../db');
const router = require('express').Router();
const { Op } = require("sequelize");

router.get("/",function(_req,res){
    Product.findAll().then(product => res.status(200).json(product)).catch(error => res.status(400).send(error))
})
router.post("/",function(req,res,_next){
   
    Product.create({
                    title:req.body.title,
                    resume:req.body.resume,
                    detail:req.body.detail,
                    price:req.body.price,})

.then( (response) =>{
    
if(req.body.image.length > 0){
    req.body.image.map( c =>
        image.create({
            productId: response.UUID, 
            url:c.url 
        }) 
    )   
} 

               
}) 
.then( (response) =>{

    category_product.create({
        productId:response.UUID,
        categoryId:req.body.category,
    })            
})  
.then( (response) =>{

    stock.create({
        productId:response.UUID,
        office_id:req.body.office_id,
        quantity:0,
    })            
})                          
.then( () =>{
    res.status(200).json("creado exitosamente")
})

})



module.exports = router;