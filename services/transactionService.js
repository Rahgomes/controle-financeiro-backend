// const mongoose = require('mongoose');
// const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
const TransactionModel = require('../models/TransactionModel');

const getYearMonth = async (req, res) => {
    const contentYearMonth = req.query.period;
    try {
        const getData = await TransactionModel.find({ yearMonth: contentYearMonth });
        res.send(getData);
    } catch (e) {
        res.send('Erro no GetTest: ' + e);
    }
}

module.exports = { getYearMonth };