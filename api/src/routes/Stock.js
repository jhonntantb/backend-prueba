const router = require('express').Router();
const { Stock } = require('../db')

router.get("/",async (_req, res,next) => {
    //{include:[{model:office},{model:product}]}
    try {
        const stock=await Stock.findAll()
        res.send(stock)
    } catch (error) {
       next(error) 
    }
})
// al agregar stock de un producto setear ala oficina?? 
// se debe relacionar al producto
router.post("/",async (req,res,next) => {
    const newStock=req.body;
    //body tiene que traer: id de la officina id del producto el cual se agrega el sotck
    try {
        const stock=await Stock.create({quantity:req.body.quantity})
        res.send(stock)
        await stock.setOffices(newStock.officeId)
        await stock.setProducts(newStock.productId)
    } catch (error) {
        next(error)
    }
    
    //seteamos ese stock a una officina y producto 
})
//modificariomos en el caso que entre otra cantidad del mismo producto
router.put("/:id",async (req,res,next) => {
    try {
        const stock=await Stock.update(req.body,{where:{id:req.params.id}})
    } catch (error) {
        next(error)
    }
    Stock.findOne({
        where: {
            id: req.body.stock.id
        }
    })
})
module.exports = router;
