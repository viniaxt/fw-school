const { sub } = require("../../src")

describe("[UNIT] SUB service", () => {
  test("Should be a function", () => {
    expect(typeof sub).toBe("function")
  })

  test("Should be 5 - 3 = 2", () => {
    expect(sub(5, 3)).toBe(2)
  })

  test("Should be 10 - -20 = 30", () => {
    expect(sub(10, -20)).toBe(30)
  })
})