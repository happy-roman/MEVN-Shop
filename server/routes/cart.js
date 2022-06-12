const router = require('express-promise-router')()
const { cart } = require('../controllers')

router.route('/').get(cart.getAll)
router.route('/:id').get(cart.get)
router.route('/').post(cart.post)
router.route('/:id').put(cart.put)
router.route('/:id').delete(cart.delete)

module.exports = router