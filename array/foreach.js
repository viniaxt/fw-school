const logger = require("../logger")

/**
 * Array.prototype.foreach()
 */

const students = ["Marcelo", "Vini", "Roberto", "Marcos"]

students.forEach(function(student) {
  console.log("Hi " + student)
})
