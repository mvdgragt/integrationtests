const catalogue = {
  dune: { title: "dune", price: 89 },
  neuromancer: { title: "neuromancer", price: 79 },
  foundation: { title: "foundation", price: 75 },
};

function findBook(title) {
  const book = catalogue[title];
  if (!book) {
    throw new Error(`Book not found: ${title}`);
  }
  return { title: book.title, price: book.price };
}

function reserveStock(book) {
  console.log(`Reserving stock for ${book.title}`);
  const reservationCode = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
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
  return confirmPurchase(reservationCode, book.price);
}

module.exports = { findBook, reserveStock, confirmPurchase, buyBook };
