const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const config = require('./DB');
const mongoose = require('mongoose');
const businessRoute = require('./business.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser:true}).then(
    () => {console.log('Databse is connected')},
    err => { console.log("cannot connect to the database" + err)}
);
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/product', businessRoute);

app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});