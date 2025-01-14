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

const getOrdersByEmail = async (req, res) => {
  try {
    const {email} = req.params
    const orders = await Order.find({email}).sort({createdAt: -1})
    if(!orders){
      return res.status(404).send("No orders found for the user")
    }
    res.status(200).send(orders)
  } catch (error) {
    console.error("Error fetching orders by email", error);
    res.status(500).send({message: "Failed to fetch orders by email"})
  }
}

module.exports = {
  createOrder,
  getOrdersByEmail
};
