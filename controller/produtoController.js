var Produto = require('../model/Produto');

exports.save = function(nome, descricao, valor, callback){
	new Produto({
		'nome' : nome,
		'descricao' : descricao,
		'valor' : valor
	}).save(function(error, produto){
		if(error){
			callback({error : 'Não foi possível salvar'});
		}else{
			callback(produto);
		}
	});
};

exports.list = function(callback){
	Produto.find({}, function(error, produtos){
		if(error){
			calback({error : 'Não foi possível encontrar os produtos'});
		}else{
			callback(produtos);
		}
	});
};

exports.delete = function(id, callback){
	Produto.findById(id, function(error, produto){
		if(error){
			callback({error : 'Não foi possível excluir'});
		}else{
			produto.remove(function(error){
				if(!error){
					callback({resposta : 'Produto excluído com sucesso'});
				}
			});
		}
	});
};