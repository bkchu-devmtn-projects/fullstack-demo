require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const massive = require('massive');

const { CONNECTION_STRING, PORT } = process.env;

const productCtrl = require('./controllers/productsCtrl');

const app = express();

app.use(bodyParser.json());
// app.use(cors());

massive(CONNECTION_STRING).then(dbInstance => {
  return app.set('db', dbInstance);
});

app.get('/api/test', (req, res) => {
  res.status(200).send({ message: 'Connected!! wooo!' });
});

app.get('/api/products/:id', productCtrl.getProductById);

const port = PORT || 3001;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
