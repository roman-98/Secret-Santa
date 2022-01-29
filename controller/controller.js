const User = require('../models/User')

module.exports.register = async function(req, res) {
  
  const user = new User({
    username: req.body.username,
    lastname: req.body.lastname
  })
  try {
    await user.save()
    res.status(201).json(user)
  } catch(e) {
    console.log(e)
  }
    
}

module.exports.play = async function(req, res) {
  // logic of game
}
