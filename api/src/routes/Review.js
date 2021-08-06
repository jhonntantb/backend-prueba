const router = require('express').Router();
const { Review } = require('../db')

router.get("/", (_req, res) => {
    Review.findAll()
    .then((reviews) => {
        res.status(200).send(reviews)
    })
    .catch((error) => {
        res.status(400).send(error)
    })
})

router.get("/:id", (req, res) => {
    Review.findOne({where: {
        id: req.body.review.id
    }})
    .then((review) => {
        res.status(200).send(reviews)
    })
    .catch((error) => {
        res.status(400).send(error)
    })
})

router.post("/", (req, res)=>{
    Review.create(req.body.review)
    .then(()=>{
        res.status(200).josn("Review creada exitosamente")
    })
    .catch(error => res.status(400).send(error))
})

router.put("/", (req, res) => {
    Review.findOne({
        where: {
            id: req.body.review.id
        }
    })
    .then(review => review.update({
            date: Date.now(),
            score: req.body.review.score,
            description: req.body.review.description
        })
    )
    .then(() => res.status(200).json("Eliminado exitosamente"))
    .catch(error => res.status(400).send(error))
})