const { crudController } = require('./crudController');
const { cart } = require('../models');

module.exports = {
  ...crudController(cart),
  async getAll(req, res) {
    try {
      console.log(req.body.userId);
      // `${req.body.userId}`
      const userCart = await cart.find({ 'userId': '637da7066cdf70aa8d620970' });
      // eslint-disable-next-line no-underscore-dangle
      const items = await cart.findById(userCart[0]._id);
      return res.status(200).send(items);
    } catch (err) {
      throw new Error(err);
    }
  },
};
