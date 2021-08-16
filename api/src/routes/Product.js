const { Product, Category, Productimage, Stock, Review } = require('../db');

const router = require('express').Router();
const { Op } = require("sequelize");


//////////  GET PRODUCT  /////////////
router.get("/", async function (req, res, next) {
  const { name } = req.query;

  if (!name) {
    try {
      const product = await Product.findAll({ order: [['catalog_id', 'ASC']], include: [{ model: Category, attributes: ['id', 'name'] }, { model: Productimage, attributes: ['id', 'image_url'] }, { model: Review, attributes: ['id', 'date', 'score', 'description'] }, { model: Stock, attributes: ['id', 'quantity', 'officeId'] }] })
      res.status(200).json(product)
    }
    catch (error) { next(error) };
  }
  else {
    try {
      const product = await Product.findAll({ where: { title: { [Op.iLike]: "%" + name + "%" } }, include: [{ model: Category, attributes: ['id', 'name'] }, { model: Productimage, attributes: ['id', 'image_url'] }, { model: Review, attributes: ['id', 'date', 'score', 'description'] }, { model: Stock, attributes: ['id', 'quantity', 'officeId'] }] })
      res.status(200).json(product)
    }
    catch (error) { next(error) };
  }
})

router.get("/:idProducto", async function (req, res, next) {
  try {

    const product_id = req.params.idProducto;
    console.log(product_id);
    const product = await Product.findByPk(product_id, { include: [{ model: Category, attributes: ['id', 'name'] }, { model: Productimage, attributes: ['id', 'image_url'] }, { model: Review, attributes: ['id', 'date', 'score', 'description'] }, { model: Stock, attributes: ['id', 'quantity', 'officeId'] }] })
    if (product) { return res.status(200).json(product) }
    else { res.status(400) }
  }
  catch (error) { next(error) };
})

///////////    POST PRODUCT    ///////////
router.post("/", async function (req, res, next) {
  
  try {
    console.log(req.body)
    const [product, created] = await Product.findOrCreate({
      where: { catalog_id: req.body.catalog_id },
      defaults: {
        title: req.body.title,
        catalog_id: req.body.catalog_id,
        resume: req.body.resume,
        detail: req.body.detail,
        price: req.body.price
      }
    });

    if (!created) {
      res.status(400).json("Ya existe producto con mismo nro catalogo")
    }
    else {
      req.body.category.map(async (c) => {
        await product.setCategories(c);
      })
      await Stock.create({
        productId: product.id,
        officeId: req.body.office,
        quantity: req.body.quantity,
      })

      if (req.body.image.length > 0) {

        try {
          for (let i = 0; i < req.body.image.length; i++) {
            await Productimage.create({
              productId: product.id,
              image_url: req.body.image[i]
            })
          }

        } catch (err) { next(err) }

      }

      res.status(200).json(product)
    }

  }
  catch (error) { next(error) };
})

///////////    UPDATE PRODUCT    ///////////
router.put("/", async function (req, res, next) {
console.log('update product body: ', req.body)
  try {
   
    const product = await Product.update({where: {id: req.body.id}},
      {
       title: req.body.title,
       catalog_id: req.body.catalog_id,
       resume: req.body.resume,
       detail: req.body.detail,
       price: req.body.price 
      }
     )

    if (!product) {
      return res.status(400).json("No existe producto")
    }

    req.body.category.map(async (c) => {
        await product.setCategories(c);
      })
      await Stock.create({
        productId: product.id,
        officeId: req.body.office,
        quantity: req.body.quantity,
      })

      if (req.body.image.length > 0) {

        try {
          for (let i = 0; i < req.body.image.length; i++) {
            await Productimage.create({
              productId: product.id,
              image_url: req.body.image[i]
            })
          }

        } catch (err) { next(err) }

      }

      res.status(200).json(product)
    

  }
  catch (error) { next(error) };
})


///////////    DELETE PRODUCT    ///////////
// En general solo para usar via postman para borrar por mantenimiento
//
// By id
router.delete("/:id", async function (req, res, next) {
  //console.log("REQ PRODUCT: ",req.params)
  await Product.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.status(200).json("borrado exitosamente")
  }).catch((err) => next(err))
})

// By query id or catalog_id
router.delete("/", async function (req, res, next) {
  if (req.query.id) {
    await Product.destroy({
      where: { id: req.query.id }
    })
      .then(() => { res.status(200).json("borrado exitosamente") })
      .catch((err) => next(err))
  }
  else {
    if (req.query.catalog_id) {
      await Product.destroy({
        where: { catalog_id: req.query.catalog_id }
      })
        .then(() => { res.status(200).json("borrado exitosamente") })
        .catch((err) => next(err))
    }
    else {
      res.status(300).json("No vino ni id ni catalog_id para borrar")
    }
  }
})


module.exports = router;