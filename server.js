var express = require('express');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var path = require('path');

var app = express();
app.use(express.static('public'));
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const db = require("./database/db");

require('./routes/routes')(app);

//database connection
db.connect((err)=>{
    if(err){
        console.log('Unable to connect to database.');
        process.exit(1);
    }
    else{
        app.listen(8080,()=>{
            console.log('successfully connected to database');
        });
    }
})

app.listen(3000, function(require,response){
    console.log('Express is running at port 8080....');
})