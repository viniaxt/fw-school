function multiply (...args) {
  const params = args.map(arg => arg)
  console.log(params)
  const { params } = params
  console.log(a)
}

// rest params can receive multiple params, and they are not definde by you!
console.log(multiply(2, 1, 2, 3, 4, 5, 6))
multiply({a: 1, b: 2})