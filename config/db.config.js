require('dotenv').config();
const mysql = require('promise-mysql');



// Pasamos los valores de la conexion
const connetion = mysql.createConnection({
    host:       process.env.HOST,
    database:   process.env.DATABASE,
    user:       process.env.USER,
    password:   process.env.PASSWORD,
});

// Conexion de la base de datos
const getConnection = () => {
    return connetion;
}

module.exports = {
    getConnection
}