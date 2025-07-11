// tests/validateBug.test.js
const { validateBug } = require("../utils/validateBug");

test("should return true for valid bug", () => {
  const bug = { title: "Crash", description: "Page crashes on load" };
  expect(validateBug(bug)).toBe(true);
});
