export const createDrink = (type) => {
  const menu = {
    latte: 45,
    espresso: 30,
    cappuccino: 50,
  };
  return { type: type, price: menu[type] };
};

const prepareOrder = (drink) => {
  console.log(`Preparing ${drink.type} ...`);
  const ticketNumber = Math.floor(Math.random() * 1000);
  return ticketNumber;
};

const processPayment = (ticketNumber, amount) => {
  if (!ticketNumber) {
    throw new Error("No ticket number provided");
  }
  console.log(`Payment of ${amount}SEK received for ticket #${ticketNumber}`);
  return true;
};

const orderDrink = (drinkType) => {
  const drink = createDrink(drinkType);
  const ticketNumber = prepareOrder(drink);
  const paymentSuccess = processPayment(ticketNumber, drink.price);
  return paymentSuccess;
};

export { prepareOrder, orderDrink };
