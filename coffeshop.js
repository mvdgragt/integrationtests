const menu = {
  latte: 45,
  espresso: 30,
  cappuccino: 50,
};

function createDrink(type) {
  if (!menu[type]) {
    return { type, price: undefined };
  }
  return { type, price: menu[type] };
}

function prepareOrder(drink) {
  console.log(`Preparing ${drink.type}...`);
  const ticketNumber = Math.floor(Math.random() * 1000);
  return ticketNumber;
}

function processPayment(ticketNumber, amount) {
  if (!ticketNumber) {
    throw new Error("No ticket number provided");
  }
  console.log(`Payment of ${amount} received for ticket #${ticketNumber}`);
  return true;
}

function orderDrink(drinkType) {
  const drink = createDrink(drinkType);
  const ticketNumber = prepareOrder(drink);
  const result = processPayment(ticketNumber, drink.price);
  return result;
}

module.exports = { createDrink, prepareOrder, processPayment, orderDrink };
