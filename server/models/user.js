const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const user = new Schema({
  name: {
    type: String,
    required: true,
  },
  cart: {
    type: ObjectId,
    ref: 'cart',
  },
});

module.exports = model('user', user);
