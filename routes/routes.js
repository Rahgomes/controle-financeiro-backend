const express = require('express');
const transactionRouter = express.Router();
const transactionService = require('../services/transactionService');

transactionRouter.get('/', transactionService.getYearMonth);
transactionRouter.post('/', transactionService.postNewRelease);
transactionRouter.patch('/:id', transactionService.patchRelease);
transactionRouter.delete('/:id', transactionService.deleteRelease);

module.exports = transactionRouter;
