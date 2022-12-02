/**
 * @jest-environment jsdom
 */

import movieCounter from '../modules/movieCounter.js';

describe('movie counter test', () => {
  test('add an array of length 5 to return Movies(5)', () => {
    const arr = [2, 4, 5, 6, 7];
    const element = document.createElement('a');
    const assert = 'Movies(5)';
    const act = movieCounter(arr, element);

    expect(act).toBe(assert);
  });
  test('add an empty array to return Movies(0)', () => {
    const arr = [];
    const element = document.createElement('a');
    const assert = 'Movies(0)';
    const act = movieCounter(arr, element);

    expect(act).toBe(assert);
  });
});
