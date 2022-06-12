const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose');

const sub_category = new Schema({
  name: {
    type: String,
    default: ''
  },
  products: [{
    type: ObjectId,
    ref: "product"
  }]
});

module.exports = model('sub_category', sub_category)