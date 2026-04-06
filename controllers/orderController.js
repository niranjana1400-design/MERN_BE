const Order = require("../models/Order");

// CREATE ORDER
exports.createOrder = async (req, res) => {
  try {
    const { userId, products, totalAmount } = req.body;

    // basic validation
    if (!userId || !products || !totalAmount) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const order = new Order({
      userId,
      products,
      totalAmount,
    });

    await order.save();

    res.status(201).json({
      message: "Order created successfully",
      order,
    });

  } catch (error) {
    res.status(500).json({
      message: "Server Error",
      error: error.message,
    });
  }
};

//  GET ALL ORDERS
exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find();

    res.status(200).json(orders);

  } catch (error) {
    res.status(500).json({
      message: "Error fetching orders",
      error: error.message,
    });
  }
};