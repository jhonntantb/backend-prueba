const router = require('express').Router();
const { Order } = require('../db')

router.get("/", (_req, res) =>{
    Order.findAll()
    .then(reviews => res.status(200).send(reviews))
    .catch(error => res.send(400).send(error))
})

router.get("/:id", (req, res) =>{
    Order.findOne({
        where: {
            id: req.body.order.id
        }
    })
    .then(review => res.status(200).send(review))
    .catch(error => res.send(400).send(error))
})

router.post("/", (req, res) => {
    Order.create(req.body.order)
    .then(() => {
        res.status(200).json("Orden creada exitosamente")
    })
    .catch(error => res.status(400).send(error))
})

router.put("/", (req, res) => {
    Order.findOne({
        where: {
            id: req.body.order.id
        }
    })
    .then(ord => {
        return ord.update(req.body.order)
    })
    .catch(error => res.status(400).send(error))
})

router.delete("/", (req, res) => {
    Order.findOne({
        where: {
            id: req.body.order.id
        }
    })
    .then(ord => {
        return ord.update({
            status: false
        })
    })
    .then(() => res.status(200).json("Eliminado exitosamente"))
    .catch(error => res.status(400).send(error))
})