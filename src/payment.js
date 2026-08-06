// step 3: payment
const processPayment = (ticketNumber, amount) => {
  if (!ticketNumber) throw new Error("No ticket number provided");

  console.log(`Payment of ${amount} SEK received for ticket #${ticketNumber}`);
  return true;
};

module.exports = { processPayment };
