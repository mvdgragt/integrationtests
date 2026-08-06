const { processPayment } = require("./payment.js");
//step 1: creating a drink

const createDrink = (type) => {
  const menu = { latte: 45, espresso: 30, cappuccino: 50 };
  return { type, price: menu[type] };
};

//step 2: prepare order

const prepareOrder = (drink) => {
  console.log(`Preparing ${drink.type} to the kitchen`);
  const orderId = Math.floor(Math.random() * 1000);
  return orderId;
};

const orderDrink = (drinkType) => {
  const drink = createDrink(drinkType);
  const ticket = prepareOrder(drink);
  const payment = processPayment(ticket, drink.price);
  return payment;
};
module.exports = {
  createDrink,
  prepareOrder,
  orderDrink,
};

/*
orderDrink("latte");

export { createDrink, prepareOrder, processPayment, orderDrink };*/
