const { sum } = require('../../src')

describe("[UNIT] Sum service", () => {
  test("Should be a function", () => {
    expect(typeof sum).toBe("function")
  }) 

  test("Should be 10 + 5 = 15", () => {
    expect(sum(10, 5)).toBe(15)
  })
  
  test("Should be 10 + -20 = -10", () => {
    expect(sum(10, -20)).toBe(-10)
  })
})
