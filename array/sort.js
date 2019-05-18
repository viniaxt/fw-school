const logger = require("../logger")

/**
 * Array.prototype.sort()
 */

const fruits = ["apple", "orange", "banana", "strawberry", "kiwi"]

fruits.sort()
logger.info(fruits)

/**
 * custom sort
 */

const people = [
  { name: "Marcos", age: 21 },
  { name: "Vinicius", age: 19 },
  { name: "Roberto", age: 22 },
  { name: "Marcelo", age: 38 }
]

logger.info(people.sort(orderByName))
logger.info(people.sort(orderByAge))

function orderByName(currentName, nextName) {
  if (currentName.name > nextName.name) {
    return 1
  }
  if (currentName.name < nextName.name) {
    return -1
  }
  return 0
}

function orderByAge(currentName, nextName) {
  if (currentName.age > nextName.age) {
    return 1
  }
  if (currentName.age < nextName.age) {
    return -1
  }
  return 0
}
