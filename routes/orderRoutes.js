const express = require("express");
const router = express.Router();
const Order = require("../models/Order");

// 🧾 CREATE ORDER
router.post("/create", async (req, res) => {
  try {
    const { name, email, mobile, state, amount } = req.body;

    // Validation
    if (!name || !email || !mobile || !amount) {
      return res.status(400).json({ msg: "All fields required" });
    }

    const order = await Order.create({
      name,
      email,
      mobile,
      state,
      amount,
      status: "PAID",
      createdAt: new Date()
    });

    res.json(order);
  } catch (error) {
    console.error("Order error:", error);
    res.status(500).json({ msg: "Order failed" });
  }
});

// 🧑‍💼 GET ALL ORDERS (Admin)
router.get("/all", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ msg: "Failed to load orders" });
  }
});

// 💰 TOTAL REVENUE
router.get("/revenue", async (req, res) => {
  try {
    const orders = await Order.find();
    const total = orders.reduce((sum, o) => sum + o.amount, 0);
    res.json({ total });
  } catch (error) {
    res.status(500).json({ msg: "Failed to calculate revenue" });
  }
});

module.exports = router;
