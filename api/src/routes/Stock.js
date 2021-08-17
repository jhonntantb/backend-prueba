const router = require('express').Router();
const e = require('express');
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
//al crear un nuevo producto obligas a setear una oficina asi que no es necesario
router.post("/",async (req,res,next) => {
    //body tiene que traer: id de la officina id del producto el cual se agrega el sotck
    try {
        const stock=await Stock.create({
            productId: req.body.productId,
            officeId: req.body.office_id,
            quantity: req.body.quantity,
          })
        res.send(stock)
    } catch (error) {
        next(error)
    }
    
    //seteamos ese stock a una officina y producto 
})
//modificariomos en el caso que entre otra cantidad del mismo producto
// desde en front se enviara un array[{id:iddelstock,quantity:new quantity}]
router.put("/",async (req,res,next) => {
    const stocks=req.body.stocks
    //console.log("stocks",stocks)
    try {
        for(let i=0;i<stocks.length; i++){
            await Stock.update({quantity:stocks[i].quantity},{where:{id:stocks[i].id}})
        }
        res.status(200)
    } catch (error) {
        next(error)
    }
    //para ver si se modifico
})
module.exports = router;
