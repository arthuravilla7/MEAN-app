var app = require('./config/app_config');
var db = require('./config/db_config');

var Produto = require('./model/Produto');
var produtoController = require('./controller/produtoController');
var produtos = require('./routes/produtoRouter');


app.get('/', function(req, res){
	res.end('Bem-vindo a API de produtos');
});

//atribui a dota /produtos arquivo de rota produtoRouter
app.use('/produtos', produtos);
