const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI ||
        "mongodb+srv://Adel:zYgLVeSc51aTu7oj@pizza-order-flgi8.mongodb.net/test?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    console.log("Connected to database!");
  } catch (err) {
    console.error(err.message);
    // Exit process with failure
    console.log("Connection failed!");
    process.exit(1);
  }
};

module.exports = connectDB;
