const { crudController } = require('./crudController');
const { category } = require('../models');

module.exports = {
  ...crudController(category),
};
