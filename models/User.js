const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')
class Users extends Model {}

Users.init({
  username: {
    type: DataTypes.STRING
  },
  lastname: {
    type: DataTypes.STRING
  },
  desire: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
})

module.exports = Users