const logger = require("../logger")

/**
 * Array.prototype.fill()
 */

const fillArray = new Array(10)
fillArray.fill("a")

logger.info(fillArray)
