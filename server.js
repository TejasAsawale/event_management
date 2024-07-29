const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config;
const routeAPI = require('./routes/api');
const mongoDB = require('./config/db.js');

const app = express();
port = 5007;

app.use(express.json());
app.use(bodyParser.json());

mongoDB.connectDB();

app.use('/api',routeAPI)

app.listen(port,() => console.log("Server started on...",port));
