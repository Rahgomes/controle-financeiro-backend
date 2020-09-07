const express = require('express');
const transactionRouter = express.Router();
const transactionService = require('../services/transactionService');

transactionRouter.get('/api/transaction', transactionService.getTest);

module.exports = transactionRouter;
