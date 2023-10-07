const express = require('express');
const router = express.Router();
const decoratorController = require('../controller/DecoratorController');

router.post('/addDecorator',decoratorController.addDecorator);
router.put('/updateDecorator',decoratorController.updateDecorator);
router.delete('/deleteDecorator',decoratorController.deleteDecorator);

module.exports = router;