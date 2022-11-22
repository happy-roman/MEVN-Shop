const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const product = new Schema({
  product_name: {
    type: String,
    default: '',
  },
  price: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  img: {
    type: String,
    default: '',
  },
  full_img: {
    type: String,
    default: '',
  },
  small_img: {
    type: String,
    default: '',
  },
  category: {
    type: ObjectId,
    ref: 'category',
  },
  sub_category: {
    type: ObjectId,
    ref: 'sub_category',
  },
});

module.exports = model('product', product);
