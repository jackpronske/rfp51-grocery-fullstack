// YOUR SERVER CODE HERE

const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
// const db = require("../db/index.js");
const db = require("../db/query.js");

app.use(cors());
app.use(express.json());

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
  db.select((err, data) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(200).send(data);
  })
})

//paths for posting on groceryList
//create a test first, so we can mess with postman

app.post('/groceryList', (req, res) => {
  let data = req.body;
  db.insert(data, (err) => {
    if (err) {
      res.status(500).send(err);
    }
    res.status(201).send('SUCCESSFULLY POSTED')
  })
})

app.listen(port, () => {
  console.log("listening on 8080");
});
