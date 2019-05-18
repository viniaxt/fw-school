const logger = require("../logger")

/**
 * Array.prototype.map()
 * map retorna uma lista!!
 */

const people = [
  { name: "Marcos", age: 21 },
  { name: "Vinicius", age: 19 },
  { name: "Roberto", age: 22 },
  { name: "Marcelo", age: 38 }
]

const allAges = people.map(function(person) {
  return person.age
})

logger.info(allAges)

const names = ["Marcos", "Vini", "Roberto", "Marcelo"]

const exemplo = names.map(function(nome) {
  return {
    name: nome,
    age: 0,
    company: "FW7"
  }
})

logger.info(exemplo)
