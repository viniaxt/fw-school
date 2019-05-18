const logger = require("../logger")

/**
 * Array.prototype.splice()
 */

const students = ["Marcos", "Vini", "Marcelo", "Roberto"]

// inserir 'Marcel' entre vini e marcelo
students.splice(2, 0, "Marcel")
logger.info(students)

// remover 'Marcelo' do array
students.splice(3, 1)

logger.info(students)
students.splice(1)

console.log(students)
