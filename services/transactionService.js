// const ObjectId = mongoose.Types.ObjectId;
const TransactionModel = require('../models/TransactionModel');

const getYearMonth = async (req, res) => {
    const contentYearMonth = req.query.period;
    try {
        const getData = await TransactionModel.find({ yearMonth: contentYearMonth });
        res.send(getData);
    } catch (e) {
        res.send('Erro no getYearMonth: ' + e);
    }
}

const postNewRelease = async (req, res) => {
    const newRelease = new TransactionModel({
        description: req.body.description,
        value: req.body.value,
        category: req.body.category,
        year: req.body.year,
        month: req.body.month,
        day: req.body.day,
        yearMonth: req.body.yearMonth,
        yearMonthDay: req.body.yearMonthDay,
        type: req.body.type
    });
    try {
        const release = await newRelease.save();
        res.send(release);
    } catch (e) {
        res.send('Erro no postNewRelease: ' + e);
    }
}

const patchRelease = async (req, res) => {
    if (!req.body) {
        return res.status(400).send({
            message: 'Dados para atualização está vazio!!!',
        });
    }

    const id = req.params.id;

    try {
        const release = await TransactionModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        if (!release) {
            res.status(404).send('Nao encontrado nenhum release para atualizar');
        } else {
            res.send(release);
        }
    } catch (e) {
        res.send('Erro no patchRelease: ' + e);
    }
}

const deleteRelease = async (req, res) => {
    const id = req.params.id;

    try {
        const release = await TransactionModel.findByIdAndRemove({ _id: id });

        if (!release) {
            res.status(404).send('Nao encontrado nenhuma release para excluir');
        } else {
            res.send('Release excluída com sucesso');
        }
    } catch (e) {
        res.send('Erro no deleteRelease: ' + e);
    }
}

module.exports = { getYearMonth, postNewRelease, patchRelease, deleteRelease };