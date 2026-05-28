import { createDrink, prepareOrder, processPayment, orderDrink } from '..//..//coffeeshop.js';
import {expect, test} from '@jest/globals'

describe("Drink shop unit test", () => {
  test("Create a drink returns the correct price and type",  () => {
    const drink = createDrink('latte')
    expect(drink).toEqual({type: 'latte', price: 45})
})

  test("If unknown type is provided, it should return undefined", () => {
    const drink = createDrink('cola')
    expect(drink).toEqual({type: 'cola', price: undefined})
})

  test("Returns a valid ticket number", () => {
    const ticketNumber = prepareOrder({type: 'latte', price: 45});

    expect(ticketNumber).toBeGreaterThan(0);
  });
});