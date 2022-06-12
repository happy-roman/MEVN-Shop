const { model, Schema, Schema: { Types: { Array, ObjectId }}} = require('mongoose');

const cart = new Schema({
  user_id: {
    type: ObjectId,
    ref: "user",
  },
  content: {
    type: Array,
    default: []
  }
});

module.exports = model('cart', cart)