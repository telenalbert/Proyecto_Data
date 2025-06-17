const express = require("express");
const app = express();
const mysql = require("mysql2");
require("dotenv").config();
const { Sequelize } = require("sequelize");
const swaggerUI = require("swagger-ui-express");
const docs = require("./docs/index");

const PORT = process.env.PORT || 3000;

const sequelize = new Sequelize(process.env.DBLink);

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión con Sequelize establecida correctamente.");
  } catch (error) {
    console.error("No se pudo conectar con la base de datos:", error);
  }
})();

//Middleware
app.use(express.json());

//Rutas
app.use("/mytable", require("./routes/mytable"));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.listen(PORT, () => {
  console.log(`Servidor arriba en http://localhost:${PORT}`);
});
