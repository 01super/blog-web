function fn() {
  return 1;
}

test('the best flavor is grapefruit', () => {
  expect(fn()).toBe(1);
});
