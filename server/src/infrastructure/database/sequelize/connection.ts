import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DB_DATABASE!,
  process.env.DB_USUARIO!,
  process.env.DB_PASSWORD!,
  {
    host: process.env.DB_HOST!,
    dialect: "mssql",
  },
);

export const connectionDatabase = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a SQL Server establecida correctamente");
  } catch (error) {
    console.error("Error al conectar a SQL Server:", error);
    process.exit(1);
  }
};

export default sequelize;
