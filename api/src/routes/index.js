const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const Product = require('./Product');
const Category = require('./Category')

const router = Router();

router.use("/product", Product ) 
router.use("/category", Category )

module.exports = router;