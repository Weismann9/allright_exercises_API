let express = require('express');
let router = express.Router();

const itemController = require('../controllers').item;

router.get('/', itemController.get);
router.post('/', itemController.create);
router.get('/:id', itemController.getById);
router.put('/:id', itemController.update);
router.delete('/:id', itemController.delete);

module.exports = router;