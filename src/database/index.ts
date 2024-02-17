import { Sequelize } from "sequelize";

const database = new Sequelize({
  dialect: "sqlite",
  database: "sqlite::memory:",
});

export default database;
