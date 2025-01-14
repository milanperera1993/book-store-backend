const express = require("express");
const { createOrder, getOrdersByEmail } = require("./order.controller");

const router = express.Router();

//create an order
router.post('/create-order', createOrder)

//get order by user email address. 
router.get('/email/:email', getOrdersByEmail)

module.exports = router;