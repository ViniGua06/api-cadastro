const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Mel060616",
  database: "outro_projeto_db",
});

db.connect((error) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log("Conexão ao banco de dados MySql bem sucedida!");
});

module.exports = db;
