import { Sequelize } from "sequelize";

const { DB_DATABASE, DB_USUARIO, DB_PASSWORD, DB_HOST } = process.env;

if (!DB_DATABASE || !DB_USUARIO || !DB_PASSWORD || !DB_HOST) {
  throw new Error("Faltan datos para la conexion a la base de datos");
}

export const sequelize = new Sequelize(DB_DATABASE, DB_USUARIO, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mssql",
});
