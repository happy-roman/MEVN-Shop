const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const cart = new Schema({
  userId: {
    type: ObjectId,
    ref: 'user',
  },
  content: [
    {
      id_product: {
        type: String,
        default: '',
      },
      quantity: {
        type: Number,
        default: 0,
      },
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
    },
  ],
});

module.exports = model('cart', cart);
