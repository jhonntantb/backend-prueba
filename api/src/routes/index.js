const { Router } = require('express');


const Product = require('./Product');
const Category = require('./Category');
const Office =require('./Office');
const Bundle=require("./Boundle")
const User=require("./User")
const router = Router();

router.use("/product", Product ) 
router.use("/category", Category )
router.use("/office", Office )
router.use("/bundle",Bundle)
router.use("/user",User)

module.exports = router;