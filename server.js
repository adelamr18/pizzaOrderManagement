const express = require("express");
const ordersRoutes = require("./routes/orders");
const app = express();
const connectDB = require("./config/db");

// Connect Database
connectDB();
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use("/api/orders", ordersRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
