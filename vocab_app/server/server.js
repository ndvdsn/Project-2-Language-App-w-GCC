const express = require('express');//framework for server specific to node.js
const app = express();
const path = require('path'); // joins the paths up
const parser = require('body-parser') // takes the raw request and parses it into a JS object
const MongoClient = require('mongodb').MongoClient;//connection to a mongodb server
const createRouter = require('./helpers/create_router.js');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));//allows server to see files in public(front end)
app.use(parser.json());//

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('esol_stuff');
    const vocabCollection = db.collection('vocabulary');
    const vocabRouter = createRouter(vocabCollection);//function on create_router - holds server side instruction on what to do when it see a .get/.post etc request.  initial request written in request.js in helpers.
    app.use('/api/esol_vocabulary', vocabRouter);

  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
