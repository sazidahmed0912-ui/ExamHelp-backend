const router = require('express').Router();
const Order = require('../models/Order');

router.post('/', async (req, res) => {
  const order = await Order.create({ ...req.body, status: 'SUCCESS' });
  res.json(order);
});

router.get('/', async (req, res) => {
  const orders = await Order.find().sort({ createdAt: -1 });
  res.json(orders);
});

module.exports = router;
