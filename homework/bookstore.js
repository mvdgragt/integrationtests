export const findBook = (title) => {
  const collection = {
    dune: 89,
    neuromancer: 79,
    foundation: 75,
  };
  return { type: title, price: collection[title] };
};

const reserveStock = (book) => {
  console.log(`Preparing ${book.type} ...`);
  const reservationCode = Math.floor(Math.random() * 10000);
  return reservationCode;
};

const confirmPurchase = (reservationCode, price) => {
  if (!reservationCode) {
    throw new Error("Invalid reservation");
  }
  console.log(
    `Purchase confirmed. Reservation: #${reservationCode}, Amount: ${price}SEK`,
  );
  return { success: true, code: reservationCode };
};

const buyBook = (bookType) => {
  const book = findBook(bookType);
  const reservationCode = reserveStock(book);
  const paymentSuccess = confirmPurchase(reservationCode, book.price);
  return paymentSuccess;
};

export { reserveStock, confirmPurchase };
