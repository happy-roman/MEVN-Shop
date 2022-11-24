const { crudController } = require('./crudController');
const { user } = require('../models');

module.exports = {
  ...crudController(user),
};
