const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.use(express.json());
app.use(cors());


const mongoUrl = process.env.MONGODB_URL;
mongoose.connect(mongoUrl, err => {
  if (err) throw err;
  console.log("Mongodb connected...");
});


app.get("/", (req, res) => res.json({ msg: "Hello from express app" }));
app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Backend is running on port ${port}`);
});