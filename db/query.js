const db = require("../db/index.js");



module.exports.select = db.query('SELECT groceryName, quantity FROM list;', (err, data) => {
  console.log(data)
})

