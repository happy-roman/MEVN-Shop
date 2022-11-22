const { model, Schema, Schema: { Types: { ObjectId, Array } } } = require('mongoose');

const cart = new Schema({
  id: {
    type: ObjectId,
    ref: 'user',
  },
  content: {
    type: Array,
    default: [],
  },
  // product_name: {
  //   type: String,
  //   default: '',
  // },
  // price: {
  //   type: String,
  //   default: '',
  // },
  // description: {
  //   type: String,
  //   default: '',
  // },
  // img: {
  //   type: String,
  //   default: '',
  // },
  // full_img: {
  //   type: String,
  //   default: '',
  // },
  // small_img: {
  //   type: String,
  //   default: '',
  // },
  // category: {
  //   type: ObjectId,
  //   ref: 'category',
  // },
  // sub_category: {
  //   type: ObjectId,
  //   ref: 'sub_category',
  // },
  // quantity: {
  //   type: Number,
  //   default: 0,
  // },
});

module.exports = model('cart', cart);
