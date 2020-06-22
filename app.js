var express = require('express');
var app = express();
var mongoose = require('mongoose');
var postRoute = require('./routes/posts');
var bodyParser=require('body-parser')
var cors=require('cors');
app.use(cors())
require('dotenv/config');
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/posts',postRoute);
app.use(bodyParser.json());

mongoose.connect(process.env.DB_CONECTION, { useNewUrlParser: true,useUnifiedTopology: true });

app.listen(3000);