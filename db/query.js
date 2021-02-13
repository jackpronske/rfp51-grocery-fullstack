const db = require("./index.js");



module.exports.select = (callback) => {
  db.query('SELECT groceryName, quantity FROM list;', callback);
}

module.exports.insert = (data, callback) => {
  console.log(`Post Sucess!`)
  db.query(`INSERT INTO list (groceryName, quantity) VALUES ('${data.groceryName}' , '${data.quantity}');`, callback);
}