const createDrink = (type) => {
    const menu = {
        latte: 45,
        espresso: 30,
        cappuccino: 50,
        "iced coffee": 20
    }
    return {
        type: type,  
        price: menu[type]
    }
}

const prepareOrder = (drink) => {
    console.log(`Preparing ${drink.type}...`)
    return Math.floor(Math.random() * 1000)
}

const processPayment = (ticketNumber, amount) => {
    if(!ticketNumber) {
        throw new Error ("No ticket number provided")
    }
    console.log(`Payment of ${amount} SEK is processed. Your ticket number is ${ticketNumber}.`)
    return true
}

const orderDrink = (drinkType) => {
    const drink =  createDrink(drinkType);
    const ticket = prepareOrder(drink);
    return processPayment(ticket, drink.price)
}

module.exports = { createDrink, prepareOrder, orderDrink, processPayment };