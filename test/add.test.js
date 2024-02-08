function add(num1, num2) {
  return num1 + num2;
}

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 10 + 5 to equal 15", () => {
  expect(add(10, 5)).toBe(15);
});
