import Sequelize from "sequelize";
import dotenv from "dotenv"
dotenv.config({path: ".env"});

const db = new Sequelize(process.env.DBNAME, process.env.DBUSER, process.env.DBPASSWORD, {
  host: process.env.DBHOST,
  port: process.env.DBPORT | 3306,
  dialect: "mysql",
  define: {
    timestamps: true,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  operatorAliases: false,
});

export default db;
