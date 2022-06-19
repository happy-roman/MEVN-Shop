// const boom = require('boom');
const crudController = (model) => ({
  async getAll(res, _id = '627d353951916a54e3d01611') {
    try {
      if (model.modelName === 'cart') {
        const items = await model.findById('627d353951916a54e3d01611' || _id);
        return res.status(200).send(items);
      }
      const items = await model.find();
      return res.status(200).send(items);
    } catch (err) {
      throw new Error(err);
      // return res.status(400).send(boom.boomify(err))
    }
  },
  async get({ params: { id } }, res) {
    try {
      const item = await model.findById(id);
      return res.status(200).send(item);
    } catch (err) {
      throw new Error(err);
    }
  },
  async post({ body }, res) {
    try {
      // eslint-disable-next-line new-cap
      const item = new model(body);
      const newItem = await item.save();
      return res.status(200).send(newItem);
    } catch (err) {
      throw new Error(err);
    }
  },
  async put({ params: { id }, body }, res) {
    try {
      const item = await model.findByIdAndUpdate(id, body, { new: true });
      return res.status(200).send(item);
    } catch (err) {
      throw new Error(err);
    }
  },
  async delete({ params: { id } }, res) {
    try {
      await model.findByIdAndDelete(id);
      return res.status(200).send({ status: 'OK', message: 'Удаление упешно' });
    } catch (err) {
      throw new Error(err);
    }
  },
});

module.exports = { crudController };
