const catalogue = {
  dune: 89,
  neuromancer: 79,
  foundation: 75,
};

function findBook(title) {
  if (!catalogue[title]) {
    return { title, price: undefined };
  }
  return { title, price: catalogue[title] };
}

function reserveStock(book) {
  console.log(`Reserving stock for ${book.title}`);
  const reservationCode = Math.floor(Math.random() * 9000) + 1000;
  return reservationCode;
}

function confirmPurchase(reservationCode, price) {
  if (!reservationCode) {
    throw new Error("Invalid reservation");
  }
  console.log(`Purchase confirmed. Reservation: ${reservationCode}, Amount: ${price}`);
  return { success: true, code: reservationCode };
}

function buyBook(title) {
  const book = findBook(title);
  const reservationCode = reserveStock(book);
  const result = confirmPurchase(reservationCode, book.price);
  return result;
}

module.exports = { findBook, reserveStock, confirmPurchase, buyBook };
