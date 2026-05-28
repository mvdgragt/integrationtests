function createDrink (type) {
  const menu = {
    latte: 45,
    espresso: 30,
    cappuccino: 50
  };

  return {
    type, price: menu[type]
  };
};
console.log(createDrink('latte'))

function prepareOrder(drink){
  console.log(`Preparing ${drink.type}`)
  let randomInteger = Math.floor(Math.random() * 1000)
  randomInteger = Number(randomInteger)
  return randomInteger
};
console.log(prepareOrder('latte'))

function processPayment(ticketNumber, amount){
  if(!ticketNumber){
    throw new Error("Cannot find ticketnumber")
  }
  console.log(`Payment of ${amount} received for ticket #${ticketNumber}`)
  return true
}
processPayment(211, 23)

function orderDrink(drinkType){
  const drink = createDrink(drinkType);
  const ticketNumber = prepareOrder(drink);
  const payment = processPayment(ticketNumber, drink.price);
  return {ticketNumber: ticketNumber, drinkType, payment}
}; 

export {createDrink, prepareOrder, processPayment, orderDrink}