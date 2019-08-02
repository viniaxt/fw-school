const { mult } = require("../../src")

describe("[UNIT] MULT service", () => {
  test("Should be a function", () => {
    expect(typeof mult).toBe("function")
  })

  test("Should be 2 * 4 = 8", () => {
    expect(mult(2, 4)).toBe(8)
  })

  test("Should be -4 * -5 = 20", () => {
    expect(mult(-4, -5)).toBe(20)
  })
}) 