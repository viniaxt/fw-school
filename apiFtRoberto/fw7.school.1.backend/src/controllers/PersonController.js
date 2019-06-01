const Person = require('../models/Person')

const PersonController = {
  findAll: async (req, res) => {
    const persons = await Person.findAll()
    res.json({
      data: person
    })
  },

  findById: async (req, res) => {
    const person = await Person.findByPk(req.params.id)
    res.json({
      data: person
    })
  },

  create: async (req, res) => {
    const person = await Person.create(req.body)
    res.json({
      data: person
    })
  },

  update: async (req, res) => {
    const person = await Person.update(req.body, {
      where: {
        id: req.params.id
      }
    })
    res.json({
      data: !!person
    })
  },

  destroy: async (req, res) => {
    const Person = await Person.destroy({
      where: req.params.id
    })

    res.json({
      data: !!person
    })
  }
}

module.exports = PersonController
