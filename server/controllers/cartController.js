const { crudController } = require('./crudController')
const { cart } = require('../models')

module.exports = {
  ...crudController(cart)
}