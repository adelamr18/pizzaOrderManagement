const fs = require("fs");
const rawdata = fs.readFileSync("./assets/data/data.json");
const orders = JSON.parse(rawdata);

exports.getAllOrders = (req, res) => {
  if (req) {
    return res.status(200).json({
      message: "Orders are fetched",
      pizzaOrders: orders
    });
  } else {
    res.status(404).json({
      message: "An Error occured!"
    });
  }
};
