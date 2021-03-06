const express = require('express');
const cors = require('cors');
const transactionRouter = require('./routes/routes');
const path = require('path');
const db = require('./models/index');

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Vinculando o React ao app
 */
app.use(express.static(path.join(__dirname, 'client/build')));

/**
 * Rota raiz
 */
app.get('/api/', (_, response) => {
  response.send({
    message:
      'Bem-vindo à API de lançamentos. Acesse /transaction e siga as orientações',
  });
});

/**
 * Rotas principais do app
 */
app.use('/api/transaction', transactionRouter);

/**
 * Conexão ao Banco de Dados
 */
// const { DB_CONNECTION } = process.env;

console.log('Iniciando conexão ao MongoDB...');
db.mongoose.connect(
  db.url,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      connectedToMongoDB = false;
      console.error(`Erro na conexão ao MongoDB - ${err}`);
    }
  }
);

const APP_PORT = process.env.PORT || process.env.LOCAL_PORT;

app.listen(APP_PORT, () => {
  console.log(`Servidor iniciado na porta ${APP_PORT}`);
});