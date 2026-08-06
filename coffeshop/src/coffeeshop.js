// Creates a drink object with its type and price from the menu
export const createDrink = (type) => {
  const menu = { latte: 45, espresso: 30, cappuccino: 50 };
  return { type, price: menu[type] }; // menu["latte"] gives us 45
};

// Logs a preparation message and returns a random ticket number
export const prepareOrder = (drink) => {
  console.log(`Preparing ${drink.type}...`);
  const ticketNumber = Math.floor(Math.random() * 1000); // integer between 0–999
  return ticketNumber;
};

// Processes payment for a given ticket; throws if no ticket number is provided
export const processPayment = (ticketNumber, amount) => {
  if (!ticketNumber) {
    throw new Error("No ticket number provided");
  }
  console.log(`Payment of ${amount} received for ticket #${ticketNumber}`);
  return true;
};

// Orchestrates the full drink order: create, prepare, and pay
export const orderDrink = (drinkType) => {
  const drink = createDrink(drinkType);                          // step 1: build the drink
  const ticketNumber = prepareOrder(drink);                      // step 2: prepare the order
  const paymentSuccess = processPayment(ticketNumber, drink.price); // step 3: process payment
  return paymentSuccess;
};
