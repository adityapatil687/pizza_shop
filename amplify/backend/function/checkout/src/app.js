var express = require("express");
var Razorpay = require("razorpay");
var cors = require("cors");
var PizzaMenu = require("./data");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

var instance = new Razorpay({
  key_id: "rzp_test_yHKOcyVvlSH2ZM",
  key_secret: "2r38lCgoEzAxaa4ePhN9CV8j",
});

async function handleCheckoutReq(req, res) {
  var total = 0;
  const cartData = req.body;
  // console.log(cartData);
  //await calAmount(cartData);
  cartData.forEach((elementCart) => {
    PizzaMenu.forEach((elementMenu) => {
      if (elementMenu.id == elementCart.id) {
        if (elementCart.size === "Small") {
          total = (total + elementMenu.price) * elementCart.quantity;
        } else if (elementCart.size === "Medium") {
          total = (total + elementMenu.price + 20) * elementCart.quantity;
        } else if (elementCart.size === "Large") {
          total = (total + elementMenu.price + 40) * elementCart.quantity;
        } else if (elementCart.size === "Extra Large") {
          total = (total + elementMenu.price + 60) * elementCart.quantity;
        }
      }
    });
  });
  // console.log(total)
  try {
    const order = await instance.orders.create({
      amount: total * 100,
      currency: "INR",
      receipt: generateUniqueReceipt(),
    });
    res.status(200).json(order);
  } catch (error) {
    // console.error("Error creating order:", error);
    res.status(500).send("Internal Server Error");
  }
}

function generateUniqueReceipt() {
  const timestamp = Date.now().toString(36); // Convert timestamp to base36 for compactness
  const randomChars = Math.random().toString(36).substring(2, 10); // Generate a random string
  return (timestamp + randomChars).substring(0, 40); // Limit to 40 characters
}

app.post("/checkout", (req, res) => {
  handleCheckoutReq(req, res);
});

app.listen(port);

module.exports = app;
