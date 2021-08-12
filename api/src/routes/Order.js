const router = require('express').Router();
const { Order, User, Product, Order_Product } = require('../db')


///////////////   GET GENERAL ////////////////////////////////
router.get("/",async (_req, res,next) =>{
  console.log('ruta orden');  
    try {
        const allOrder=await Order.findAll({include:[{model: User,  attributes: ['user_name'] }, {model: Product, attributes:['catalog_id']} ]  }); 
        res.send(allOrder)
    } catch (error) {
        next(error)
    }
})
//////////////////// GET ESPECIFICO POR ID /////////////////////////////////////
router.get("/:id",async (req, res, next) =>{
    try {
       const order=await Order.findOne({where:{id:req.params.id}, include:[{model: User,  attributes: ['user_name'] },{model: Product, attributes:['catalog_id']} ] })
    //    const order=await Order.findOne({where:{id:req.params.id}, include:[{model: User,  attributes: ['user_name'] },{model: Product, attributes:['catalog_id'], include:[{model: Order_Product, attributes:['quantity','unitprice']}]} ] })
        res.send(order)
    } catch (error) {
        next(error)
    }
})


// la orden se relaciona con un usuario
//la orden se relaciona con un o varios productos
//la orden se relaciona con una oficina---->con un calendario
//-----> para el front  si el usuario no esta logueado pedir los datos necesarios para el delivery

//////////// P O S T ////////////////////////////////////////******/

// *************** FORMATO EJEMPLO DEL POST **********************
// {"status": "En preparacion",
// "total_price": 10000,
// "home_address": "Artigas 2028",
// "location": "Villa Tachitos",
// "province": "Buenos Aires",
// "country": "Argentina",
// "delivery_date": "2021-08-20",
// "userId": "046fb71e-14f1-445c-a66a-2e69556ebdad",
// "products": [
//     {
//         "productId":"b346d07c-0a61-40f2-b220-d84b494f7b5c",
//         "quantity": 20,
//         "unitprice": 200.50
//     },
//     {
//        "productId": "5949ff09-1a77-4b66-87d7-a3d60a27ec9b",
//        "quantity": 100,
//        "unitprice": 500
//     }
// ]
// }

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
            await order.addProducts(e.productId, {through: {quantity: e.quantity, unitprice: e.unitprice}})
        })
        res.send(order)
 
    //la relacion del calendario pendiente 
    } catch (error) {next(error)    }
  
   
})

///////////////////////// UPDATE //////////////////////////
//solo puede modificar el  admin el status o lo que quiera
// Formato ejemplo del body esperado:
// {"status": "En preparacion",
// "total_price": 100000,
// "province": "Tucuman"
// }

router.put("/:id",async (req,res,next) => {
    let changes = req.body
    console.log(changes);
    try {
        const order=await Order.update(changes,  {where:{id:req.params.id}})

        res.send(order);
    } catch (error) {
        next(error)
    }
})

//////////////////////////// DELETE ////////////////////////
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