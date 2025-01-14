const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(express.json());
// BEWARE OF THE FORWARD SLASH IN THE ORIGIN URL
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// routes
const bookRoutes = require("./src/books/book.route");
const orderRoutes = require("./src/orders/order.route");
const authRoutes = require("./src/users/user.route")
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

async function main() {
  await mongoose.connect(process.env.DB_URL);
  app.use("/", (req, res) => {
    res.send("Book server!");
  });
}

main()
  .then(() => console.log("MongoDB is connected!"))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});
