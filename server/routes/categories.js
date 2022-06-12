const router = require('express-promise-router')()

const { category } = require('../controllers')

router.route('/').get(category.getAll)
router.route('/:id').get(category.get)
router.route('/').post(category.post)
router.route('/:id').put(category.put)
router.route('/:id').delete(category.delete)


module.exports = router 