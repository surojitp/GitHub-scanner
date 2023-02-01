const express= require("express");
const bodyParser= require("body-parser");
const axios = require('axios');
const scan = require('./routes/scan');
const helmet = require('helmet');
const port= process.env.port || 4000;
const app= express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

// set security http headers
app.use(helmet());

app.use('/scan', scan);

app.listen(port, () => {
    console.log(`Listening port ${port}`);
    
})