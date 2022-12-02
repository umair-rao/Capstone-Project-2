/**
 * @jest-environment jsdom
 */

import commentCounterFunction from '../modules/commentCounter.js';

describe('Comment Counter', () => {
  test('should return the number of comments', () => {
    document.body.innerHTML = `
        <div class="commentContainer">
            <div class="commentItem">
            <p class="commentTime">(Just now) </p>
            <p class="commentUser">User 1: </p>
            <p class="commentText">Comment 1</p>
            </div>
            <div class="commentItem">
            <p class="commentTime">(Just now) </p>
            <p class="commentUser">User 2: </p>
            <p class="commentText">Comment 2</p>
            </div>
        </div>
        `;
    expect(commentCounterFunction()).toBe(2);
  });
  test('should return 0 if there are no comments', () => {
    document.body.innerHTML = `
        <div class="commentContainer">
        </div>
        `;
    expect(commentCounterFunction()).toBe(0);
  });
});
