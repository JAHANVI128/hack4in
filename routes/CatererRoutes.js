const express = require('express');
const router = express.Router();
const catererController = require('../controller/catererController');

router.post('/addCaterer',catererController.addCaterer);
router.put('/updateCaterer',catererController.updateCaterer);
router.delete('/deleteCaterer',catererController.deleteCaterer);

module.exports = router;