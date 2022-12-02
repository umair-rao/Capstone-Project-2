/**
 * @jest-environment jsdom
 */

import commentCounterFunction from '../src/modules/commentCounter.js';

describe('Comment Counter', () => {
  test('should return the number of comments', () => {
    document.body.innerHTML = `
    <div class="comments">
    <p>03/11/2021 Alex: I loved movie</p>
    <p>03/12/2021 Mia: I didnt enjoyed</p>
    </div>
    <div class="comments">
          <p>03/11/2021 Alex: I loved movie</p>
          <p>03/12/2021 Mia: I didnt enjoyed</p>
    </div>
        `;
    expect(commentCounterFunction()).toBe(2);
  });
  test('should return 0 if there are no comments', () => {
    document.body.innerHTML = `
        <div class="comments">
        </div>
        `;
    expect(commentCounterFunction()).toBe(0);
  });
});
