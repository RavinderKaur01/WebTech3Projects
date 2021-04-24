var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
var port = 8081;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

require('./model/studentmodel');
mongoose.connect('mongodb://localhost/project', function(){
    console.log('connected to database!')
});

app.use(express.static(path.join(__dirname,'public')));

var studentcontroller = require('./controller/studentcontroller');
var studentRouter = express.Router();
app.use('/students',studentRouter);
//studentRouter.get('/'studentcontroller.all);
//studentRouter.get('/',studentcontroller.create);

app.listen(port,function(){
	console.log('Server listening on port'+port)
});

