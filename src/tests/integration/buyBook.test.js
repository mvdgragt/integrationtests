'use strict';

const { buyBook } = require('../../bookstore');

describe('Bookstore integration test', () => {

  test('buyBook("dune") returns success object', () => {
    const result = buyBook('dune');

    expect(result).toEqual({
      success: true,
      code: result.code
    });

    expect(typeof result.code).toBe('number');
  });

});