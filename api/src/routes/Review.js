const router = require('express').Router();
const { Op } = require("sequelize");
const { Review, User, Product } = require('../db')

////////////// GET ESPECIFICO o TODOS //////////////////////
// Busqueda de reviews de un review id o todos los reviews de un producto o todos los reviews de eun usuario,via query.
// Sin parametro de query devuelve todos
// Uso:
// /review?reviewId=
// /review?productId=
// /review?userId=
// /review               
router.get("/",async (req, res,next) => {
    console.log(req.query);
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
            const review=await Review.findAll({include:[{model:User, attributes:['user_name', 'first_name', 'last_name']},{model:Product, attributes:['catalog_id', 'title']}]});
            res.send(review)
        
      } catch (error) {next(error)} 
   
     // return res.status(300).send('No recibio dato valido por query)')
})


///////////// POST REVIEW /////////////////////////////////////

router.post("/",async (req, res, next)=>{
    console.log(req.body)
    try {
        const review=await Review.create(
            { score: req.body.score,
              description: req.body.description,
              productId: req.body.productId,
              userId: req.body.userId
             })
      
       //  await review.setProducts(req.body.productId)
       //  await review.setUsers(req.body.userId)
         res.send(review)
    } catch (error) {
        next(error)
    }
})


//////////////////// DELETE REVIEW  //////////////////////////
router.delete("/:reviewId",async (req,res,next)=>{
    try {
        const review=await Review.destroy({where:{id:req.params.reviewId}})
        if(review) return  res.send("Review eliminado")
        return res.sendStatus(400)
    } catch (error) {
        next(error)
    }
})
// no se púede modificar una review, por eso no se incluye update

module.exports = router;