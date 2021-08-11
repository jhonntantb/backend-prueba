const router = require('express').Router();
const { Order, User, Product } = require('../db')
//para que serviria esta ruta para admin 

router.get("/",async (_req, res,next) =>{
  console.log('ruta orden');  
    try {
        const allOrder=await Order.findAll({include:[{model: User,  attributes: ['user_name'] }, {model: Product, attributes:['catalog_id']} ]  });
        res.send(allOrder)
    } catch (error) {
        next(error)
    }
})
//para que nos serviria esta ruta par aver el estado y modificar de una order
router.get("/:id",async (req, res, next) =>{
    try {
        const order=await Order.findOne({where:{id:req.params.id}, include:[{model: User,  attributes: ['user_name'] } ] })
        res.send(order)
    } catch (error) {
        next(error)
    }
})
// la orden se relaciona con un usuario
//la orden se relaciona con un o varios productos
//la orden se relaciona con una oficina---->con un calendario
//-----> para el front  si el usuario no esta logueado pedir los datos necesarios para el delivery

router.post("/",async (req, res, next) => {
    try {
        const order=await Order.create({
            status: req.body.status,
            total_price: req.body.total_price,
            home_address: req.body.home_address,
            location: req.body.location,
            province: req.body.province,
            country: req.body.country,
            delivery_date: req.body.delivery_date,
            userId: req.body.userId
        })
        req.body.products.forEach(async (e) => {
            await order.setProducts(e.productId)
        })
        res.send(order)
    //    await order.setProducts(req.body.products)
    //la relacion del calendario pendiente 
    } catch (error) {next(error)    }
   //body tiene que traer el id de productos en un array si es uno o mas[]
   
})
//solo puede modificar el  admin el status o lo que quiera
router.put("/:id",async (req,res,next) => {
    try {
        const order=await Order.update(req.body,{where:{id:req.params.id}})
    } catch (error) {
        next(error)
    }
})
//solo puede deletear el admin
router.delete("/:id",async (req, res) => {
    try {
        await Order.destroy({where:{id:req.params.id}})
        res.sendStatus(200)
    } catch (error) {
        next(error)
    }
})

module.exports = router;