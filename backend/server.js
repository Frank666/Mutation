const express = require('express');
const adnRouter = require('./routers/adn');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8090;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Mongo OKAS');
});

app.use('/api', adnRouter);


app.listen(port, () => {
    console.log(`running on:  ${port}`)
});