const logger = require("../logger")

/**
 * Array.prototype.shift()
 */

const students = ["Marcos", "Roberto", "Marcelo", "Vini"]
const removedStudent = students.shift()

logger.info(removedStudent)
logger.info(students)
