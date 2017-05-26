var mongoose = require('mongoose');
var urlString = 'mongodb://localhost/APItest';

mongoose.connect(urlString, function(err, res){
	if(err){
		console.log('Não foi possível conectar a: ' + urlString);
	}else{
		console.log('Conectado a: ' + urlString);
	}
});
