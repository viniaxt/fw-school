const logger = require("../logger")

const students = ["Marcelo", "Vini", "Roberto", "Marcos"]

console.time("foreach")

students.forEach(function(student) {
  console.log("Hi " + student)
})

console.timeEnd("foreach")
