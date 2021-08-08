const router = require('express').Router();
const { Review } = require('../db')
//falta probar
//enviar 
router.get("/",async (_req, res,next) => {
    try {
        const review=await Review.findAll({include:{model:User}});
        res.send(review)
    } catch (error) {
        next(error)
    }
})
router.get("/:id",async (req, res,next) => {
    try {
        const review=await Review.findOne({where: {id: req.body.review.id}})
        res.send(review)
    } catch (error) {
        next(error)
    }  
})
// al crear una review se le relaciona con el usuario//solo logueado y comprado
router.post("/",async (req, res)=>{
    try {
        const review=await Review.create(req.body.review)
        res.send(review)
        await review.setUsers(req.body.userId)
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
