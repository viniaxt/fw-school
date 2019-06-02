const currency = new Promise((resolve, reject) => {  
  setTimeout(() => {
    resolve({ currency: 'euro', value: 3.50 })
  }, 2000)
})

const countries = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(['Ireland', 'England', 'Scotland'])
  }, 600)
})

Promise
  .all([currency, countries])
  .then(responses => console.log(responses))

Promise
  // race: in the moment that the first promise is resolved it ends
  .race([currency, countries])
  .then(responses => console.log(responses))