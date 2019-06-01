const Sequelize = require('sequelize')
const db = require('../lib/db')

const Person = db.define('person', {
  firstName: { type: Sequelize.STRING },
  lastName: { type: Sequelize.STRING },
  age: { type: Sequelize.INTEGER }
})

Person.sync()

module.exports = Person
