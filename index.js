'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const routesIndex = require('./routes/index');
const path = require('path');


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/store-api',
{
    useNewUrlParser:true,
}
);

//HAbilitar boduparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//Settings
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

//Habilitar cors
app.use(cors());

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', function(req,res){
    res.render('index');
    //res.send('¡Este s mi 1re  :) servidor en nodejss');
});

app.use('/', routes());

app.use("/public", express.static('./public/'));
app.use("/views", express.static('./views/'));


app.use(express.static('uploads'));


app.listen(5000, function(){
    console.log('Servidor web en ejecución');
});