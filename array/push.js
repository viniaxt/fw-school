const logger = require("../logger")

/**
 * Array.prototype.push()
 */

const studentsWithoutRoberto = ["Marcos", "Marcelo", "Vini"]
logger.info(studentsWithoutRoberto)

studentsWithoutRoberto.push("Roberto")
logger.info(studentsWithoutRoberto)
