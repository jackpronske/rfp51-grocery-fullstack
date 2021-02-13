const mysql = require("mysql");

const connection = mysql.createConnection({
  //after running the server to take a small step when exploring,
  user: "student",
  password: "student",
  database: "groceryList",
});

connection.connect();

module.exports = connection;
