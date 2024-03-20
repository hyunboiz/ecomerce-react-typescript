const express = require('express')
const router = express.Router()
const {getProductList} = require('../controllers/homeController')

router.post('/products', getProductList);

module.exports = router