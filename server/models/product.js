const { model, Schema, Schema: { Types: { ObjectId } } } = require('mongoose')

const product = new Schema({
  product_name: {
    type: String,
    default: ''
  },
  price: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  img: {
    type: String,
    default: ''
  },
  full_img: {
    type: String,
    default: ''
  },
  small_img: {
    type: String,
    default: ''
  },
  category: {
    type: ObjectId,
    ref: "category"
  },
  sub_category: {
    type: ObjectId,
    ref: "sub_category"
  }
});

module.exports = model('product', product)

// "id_product": 3,
// "id_category": 1,
// "id_sub_category": 2,
// "id_sizes": 1,
// "id_colors": 2,
// "id_material": 1,
// "id_designer": 2,
// "featured": true,
// "hot_deals": true,
// "product_name": "Mango  People  T-shirt",
// "price": "52.00",
// "img": "/img/product_img_.jpg",
// "full_img": "",
// "small_img": ""