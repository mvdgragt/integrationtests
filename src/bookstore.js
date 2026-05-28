function findBook(title){
  const books = [
    {title: 'Dune', price: 89},
    {title: 'Neuromancer', price: 79},
    {title: 'Foundation', price: 75},
  ];

  return books.find(book => book.title === title);

}

console.log(findBook('Dune'))

function reserveStock(book){

  console.log(`Reserving stock for ${book.title}`)
  const reservationCode = Math.floor(Math.random() * (10000 - 1000)) + 1000;
  return reservationCode

}

function confirmPurchase(reservationCode, price){
if(!reservationCode){
  throw new Error("Invalid reservation");
}
console.log("Purchase confirmed with reservation code: " + reservationCode + " Amount: " + price);
return {success: true, reservationCode, price}
}

function buyBook(title){

  const book = findBook(title);
  const reservationCode = reserveStock(book);
  const purchase = confirmPurchase(reservationCode, book.price)

  return {title: book.title, price: book.price, reservationCode}

}

export {findBook, reserveStock, confirmPurchase, buyBook}