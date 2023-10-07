const express = require('express');
const router = express.Router();
const catererController = require('../controller/catererController');

router.post('/addcaterer',catererController.addCaterer);
router.put('/updateCategory',catererController.updateCaterer);
router.delete('/deleteCategory',catererController.deleteCaterer);

module.exports = router;