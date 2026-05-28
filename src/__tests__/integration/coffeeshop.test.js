import { orderDrink } from "..//..//coffeeshop.js";
import {describe, test, expect} from '@jest/globals'

describe("Drink shop integration test", () => {
   test("OrderDrink returns true for a valid order", () => {
    const order = orderDrink('latte');
  
    expect(order).toEqual(expect.objectContaining({
      drinkType: 'latte',
      ticketNumber: expect.any(Number),
      payment: true
    }));
    expect(Number.isInteger(order.ticketNumber)).toBe(true);
    expect(order.ticketNumber).toBeGreaterThan(0);
    
  });
});