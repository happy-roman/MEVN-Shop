const router = require('express-promise-router')();
const { user } = require('../controllers');

router.route('/').get(user.getAll);
router.route('/:id').get(user.get);
router.route('/').post(user.post);
router.route('/:id').put(user.put);
router.route('/:id').delete(user.delete);

module.exports = router;
