const createDrink = (type) => {
  const menu = { latte: 45, espresso: 30, cappuccino: 50 };
  return { type, price: menu[type] };
};

const prepareDrink = (drink) => {
  console.log(`Preparing your ${drink.type}...`);
  const ticketNumber = Math.floor(Math.random() * 1000);
  return ticketNumber;
};

const processPayment = (ticketNumber, amount) => {
  if (!ticketNumber) {
    throw new Error("No ticket number provided");
  }
  console.log(`Payment of ${amount} received for ticket ${ticketNumber}`);
  return true;
};

const orderDrink = (drinkType) => {
  const drink = createDrink(drinkType);
  const ticketNumber = prepareDrink(drink);
  const paymentStatus = processPayment(ticketNumber, drink.price);
  return paymentStatus;
};

export { createDrink, prepareDrink, processPayment, orderDrink };
