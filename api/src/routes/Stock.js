const router = require('express').Router();
const { Stock } = require('../db')

router.get("/", (_req, res) => {
    Stock.findAll()
    .then(stocks => res.status(200).send(stocks))
    .catch(error => res.status(400).send(error))
})

router.get("/:id", (req, res) => {
    Stock.findOne({
        where: {
            id: req.body.stock.id
        }
    })
    .then(stocks => res.status(200).send(stocks))
    .catch(error => res.status(400).send(error))
})

router.post("/", (req, res) => {
    Stock.create(req.body.stock)
    .then(() => res.status(200).json("Stock creado exitosamente"))
    .catch(error => res.status(400).send(error))
})

router.delete("/", (req, res) => {
    Stock.findOne({
        where: {
            id: req.body.stock.id
        }
    })
    .then(stock => stock.update({
        active: false
    }))
    .then(() => res.status(200).json("Eliminado exitosamente"))
    .catch(error => res.status(400).send(error))
})