// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
// const db = require("../db/index.js");
const query = require("../db/query.js");

app.use(cors());

//create a server endpoint for GET requests
app.get('/', (req, res) => {
  console.log('GET RECEIVED');
  //we need a db.query for access to the table on the db

  //sending back a result to complete the get request
  //in the future, I should be sending our results from the db query through the send
    //that object should contain the grocery list from the db
    //we can then extract the good stuff and use it in our App.jsx
  res.status(201).send('I see this!')
  //side note, we need to move this to our db query callback so that it gets triggered in the right order.
})



app.get('/groceryList', (req, res) => {
  console.log("groceryList GET RECEIVED");

  //I need to moce this to its own file, I'll need to ponder over how to do this, but I think
  //it's easier than I'm thinking
    //for now, this is working solution for our server and DB!
  query.select((err, data) => {
    console.log('WHATTTTT')
    if (err) {
      res.status(500).send('ERROR CONNECTING TO DATABASE');
    }
    res.status(200).send(data);
  })
})

app.listen(port, () => {
  console.log("listening on 8080");
});
