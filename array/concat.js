const logger = require("../logger")

/**
 * Array.prototype.concat()
 */

const names1 = ["Marcos", "Vini"]
const names2 = ["Marcelo", "Roberto"]

const allNames = names1.concat(names2)
logger.info(allNames)
