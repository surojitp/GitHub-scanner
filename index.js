const express= require("express");
const bodyParser= require("body-parser");
const axios = require('axios');
const scan = require('./routes/scan');
const helmet = require('helmet');
const cors = require('cors');
const port= process.env.port || 4000;
const app= express();
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('./public'))
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.sendFile('index.html',{root:__dirname})
});

// set security http headers
app.use(helmet());

app.use('/scan', scan);

app.listen(port, () => {
    console.log(`Listening port ${port}`);
    
})