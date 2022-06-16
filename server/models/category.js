const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const category = new Schema({
  name: {
    type: String,
    default: '',
  },
  products: [{
    type: ObjectId,
    ref: 'product',
  }],
});

module.exports = model('category', category);
