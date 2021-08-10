const router = require('express').Router();
const { Op } = require("sequelize");
const { Review, User, Product } = require('../db')

////////////// GET ESPECIFICO //////////////////////
// Busqueda de reviews de un review id o todos los reviews de un producto o todos los reviews de eun usuario,via query
// Uso:
// /review?reviewId=
// /review?productId=
// /review?userId=
//
router.get("/",async (req, res,next) => {
    
      try {
       if (req.query.reviewId) {
        // Devuelve el review del id que se le pasó   
            const review=await Review.findByPk(req.query.reviewId, { include: [{model:User, attributes:['user_name', 'first_name', 'last_name']},{model:Product, attributes:['catalog_id', 'title']}]} )
            return res.send(review)
            // return review && review.length>0 ? res.send(review) : res.status(400).send('No hay datos')
        }
        if (req.query.productId && req.query.userId) {
        // Devuelve el review del producto y usuario que se le pasó
            const review=await Review.findAll({where: {[Op.and]: [{productId: req.query.productId},{userId: req.query.userId}]}, include: [{model:User, attributes:['user_name','first_name', 'last_name']},{model:Product, attributes:['catalog_id', 'title']}]} )
            return res.send(review)
        }
        if (req.query.productId) {
            // Devuelve todos los reviews del producto que se le pasó
            const review=await Review.findAll({where: {productId: req.query.productId}, include: [{model:User, attributes:['user_name', 'first_name', 'last_name']},{model:Product, attributes:['catalog_id', 'title']}]} )
            return res.send(review)
        }
        if (req.query.userId) {
            // Devuelve todos los reviews del usuario que se le pasó
            const review=await Review.findAll({where: {userId: req.query.userId}, include: [{model:User, attributes:['user_name','first_name', 'last_name']},{model:Product, attributes:['catalog_id', 'title']}]} )
            return res.send(review)
        }
      } catch (error) {next(error)} 
   
     return res.status(300).send('No recibio dato valido por query)')
})

////// GET ALL /////////////////////
router.get("/",async (_req, res,next) => {
    console.log('get reviews all');
    try {
        const review=await Review.findAll({include:[{model:User, attributes:['user_name', 'first_name', 'last_name']},{model:Product, attributes:['catalog_id', 'title']}]});
        res.send(review)
    } catch (error) {
        next(error)
    }
})

router.post("/",async (req, res, next)=>{
    try {
        const review=await Review.create(
            { date: req.body.date,
              score: req.body.score,
              description: req.body.description,
             })
      
       
         await review.setProduct(req.body.productId)
         await review.setUser(req.body.userId)
         res.send(review)
    } catch (error) {
        next(error)
    }
})
router.delete("/",async (req,res,next)=>{
    try {
        const review=await Review.destroy({where:{id:req.body}})
        res.send(review)
    } catch (error) {
        next(error)
    }
})
// no se púede modificar una review

module.exports = router;