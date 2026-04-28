'use strict';

function findBook(title) {
  const catalogue = {
    dune: 89,
    neuromancer: 79,
    foundation: 75
  };

  return {
    title: title,
    price: catalogue[title]
  };
}

function reserveStock(book) {
  console.log(`Reserving stock for ${book.title}`);

  return Math.floor(Math.random() * 9000) + 1000; // 1000–9999
}

function confirmPurchase(reservationCode, price) {
  if (!reservationCode) {
    throw new Error('Invalid reservation');
  }

  console.log(
    `Purchase confirmed. Reservation: ${reservationCode}, Amount: ${price}`
  );

  return {
    success: true,
    code: reservationCode
  };
}

function buyBook(title) {
  const book = findBook(title);
  const reservationCode = reserveStock(book);
  return confirmPurchase(reservationCode, book.price);
}

module.exports = {
  findBook,
  reserveStock,
  confirmPurchase,
  buyBook
};