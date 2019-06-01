const express = require('express')
const router = express.Router()

/**
 * Controllers
 */

const PersonController = require('./controllers/PersonController')

router.get('/', PersonController.findAll)
router.get('/person/:id', PersonController.findById)
router.post('/person', PersonController.create)
router.put('/person/:id', PersonController.update)
router.delete('/person/:id', PersonController.destroy)

module.exports = router
