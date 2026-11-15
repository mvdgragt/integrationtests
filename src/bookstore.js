const findBook = (title) => {
  const catalogue = { dune: 89, neuromancer: 79, foundation: 75 };
  return { title, price: catalogue[title] };
};

const reservStock = (book) => {
  console.log(`Reserving stock for ${book.title}...`);
  const reservationCode = Math.floor(Math.random() * 9000) + 1000;
  return reservationCode;
};

const confirmPurchase = (reservationCode, price) => {
  if (!reservationCode) {
    throw new Error("Invalid reservation");
  }
  console.log(
    `Purchase confirmed. Reservation: ${reservationCode} Amount: ${price}`,
  );
  return { success: true, code: reservationCode };
};

const buyBook = (title) => {
  const book = findBook(title);
  const reservationCode = reservStock(book);
  const purchaseConfirmation = confirmPurchase(reservationCode, book.price);
  return purchaseConfirmation;
};

export { findBook, reservStock, confirmPurchase, buyBook };
