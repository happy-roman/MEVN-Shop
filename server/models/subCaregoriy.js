const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const subCategory = new Schema({
  name: {
    type: String,
    default: '',
  },
  products: [{
    type: ObjectId,
    ref: 'product',
  }],
});

module.exports = model('sub_category', subCategory);
