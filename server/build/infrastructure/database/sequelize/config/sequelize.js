"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const { DB_DATABASE, DB_USUARIO, DB_PASSWORD, SERVER_HOST } = process.env;
if (!DB_DATABASE || !DB_USUARIO || !DB_PASSWORD || !SERVER_HOST) {
    throw new Error("Faltan datos para la conexion a la base de datos");
}
;
exports.sequelize = new sequelize_1.Sequelize(DB_DATABASE, DB_USUARIO, DB_PASSWORD, {
    host: SERVER_HOST,
    dialect: 'mysql',
    logging: console.log,
});
