'use strict';

function createDrink(type) {
  const menu = {
    latte: 45,
    espresso: 30,
    cappuccino: 50
  };

  return {
    type: type,
    price: menu[type]
  };
}

function prepareOrder(drink) {
  console.log(`Preparing ${drink.type}...`);

  return Math.floor(Math.random() * 1000);
}

function processPayment(ticketNumber, amount) {
  if (!ticketNumber) {
    throw new Error('No ticket number provided');
  }

  console.log(`Payment of ${amount} received for ticket #${ticketNumber}`);

  return true;
}

function orderDrink(drinkType) {
  const drink = createDrink(drinkType);
  const ticketNumber = prepareOrder(drink);
  return processPayment(ticketNumber, drink.price);
}

module.exports = {
  createDrink,
  prepareOrder,
  processPayment,
  orderDrink
};