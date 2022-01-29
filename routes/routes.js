const express = require('express')
const controller = require('../controller/controller')
const router = express.Router()

// localhost:7000/api/auth/register
router.post('/register', controller.register)
// localhost:7000/api/auth/play
router.post('/play', controller.play)

module.exports = router