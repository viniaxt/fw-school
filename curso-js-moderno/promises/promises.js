/**
 * promise is something that will happen in the future
 * i still didn't make it, but i will
 */

var defer = new Promise((resolve, reject) => {
  // return or not my resolve or reject

  setTimeout(() => {
    if (true) {
      resolve("hello, it works")
    } else {
      reject("error")
    }
  }, 2000)

})

// when finished, do something
defer
  .then((data) => {
    console.log(data)
    return 'foo';
  })
  .then((data) => console.log(data)) // receive data from the first then ('foo')
  .catch((err) => console.log(err))