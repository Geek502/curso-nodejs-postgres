const express = require('express');

const router = express.Router();
const OrderService = require('../services/order.service');

const service = new OrderService();

router.get('/',async (req, res) => {
 const orders = await service.find();
  res.json(orders);
});

module.exports = router;
