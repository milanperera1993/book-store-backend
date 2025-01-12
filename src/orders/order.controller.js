const Order = require("./order.model");

const createOrder = async (req, res) => {
  try {
    const newOrder = await Order({ ...req.body });
    await newOrder.save();
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error creating an order", error);
    res.status(500).send({ message: "Failed to create an order" });
  }
};

module.exports = {
  createOrder,
};
