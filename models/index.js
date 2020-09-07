const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const db = {};
db.mongoose = mongoose;
db.url = process.env.DB_CONNECTION;

module.exports = db;