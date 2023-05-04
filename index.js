const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes');

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use('', router);

const mongoURI = 'mongodb+srv://isurunaveen27:mazdamr90@cluster0.oyfjskf.mongodb.net/LMSdatabase?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

mongoose.connect(
    mongoURI, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    });

    app.listen(port, () => {
        console.log(`Library management system API listening at http://localhost:${port}`);
      });