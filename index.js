const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173/"],
    credentials: true
  })
);

// routes
const bookRoutes = require("./src/books/book.route");
app.use("/api/books", bookRoutes);

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
