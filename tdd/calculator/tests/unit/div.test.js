const { div } = require("../../src")

describe("[UNIT] DIV service", () => {
  test("Should be a function", () => {
    expect(typeof div).toBe("function")
  })

  test("Should be 2 / 1 = 2", () => {
    expect(div(2, 1)).toBe(2)
  })

  test("Should be -3 / -6 = 0.5", () => {
    expect(div(-3, -6)).toBe(0.5)
  })
})