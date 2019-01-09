let express = require('express');
let router = express.Router();

const exerciseController = require('../controllers').exercise;

router.get('/', exerciseController.get);
router.post('/', exerciseController.create);
router.get('/:id', exerciseController.getById);
router.put('/:id', exerciseController.update);
router.delete('/:id', exerciseController.delete);

module.exports = router;