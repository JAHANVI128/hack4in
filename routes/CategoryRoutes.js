const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');

router.post('/category',categoryController.createCategory);
router.put('/updateCategory',categoryController.updateCategory);
router.delete('/deleteCategory',categoryController.deleteCategory);

module.exports = router;