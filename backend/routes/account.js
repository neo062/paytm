const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware')
const accountController = require('../controllers/accountController')
router.get('/balance', authMiddleware, accountController.getBalance)
router.post('/transfer', authMiddleware, accountController.moneyTransfer)
module.exports = router;