const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const product = require('./Product');

const router = Router();

router.use("/product", product ) 

module.exports = router;