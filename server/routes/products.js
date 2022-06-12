const router = require('express-promise-router')()

const { product } = require('../controllers')

router.route('/').get(product.getAll)
router.route('/:id').get(product.get)
router.route('/').post(product.post)
router.route('/:id').put(product.put)
router.route('/:id').delete(product.delete)


module.exports = router