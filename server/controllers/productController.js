const { crudController } = require('./crudController')
const { product } = require('../models')

module.exports = {
  ...crudController(product)
}