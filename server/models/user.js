const { model, Schema } = require('mongoose');

const user = new Schema({
  name: {
    type: String,
    required: true
  }
});

module.exports = model('user', user)