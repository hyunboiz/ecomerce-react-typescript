const mysql = require('mysql2')
require('dotenv').config()
const host = process.env.HOST_DB
const username = process.env.USER_DB
const password = process.env.PASSWORD_DB
const databaseName = process.env.DATABASE_NAME

const conn = mysql.createPool({
    host: host,
    user: username,
    password: password,
    database: databaseName,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});



module.exports = conn