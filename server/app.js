var express = require('express'),
    app = express();
var fs = require ('fs');
var path = require('path');

// carregar "banco de dados" (data/jogadores.json e data/jogosPorJogador.json)
// você pode colocar o conteúdo dos arquivos json no objeto "db" logo abaixo
// dica: 3-4 linhas de código (você deve usar o módulo de filesystem (fs))
var db = {};

console.log (__dirname+'\n');

fs.readFile(__dirname+'/data/jogadores.json', 'utf8', function (err, data) {
	if (err) throw err;
  	db["players"] = JSON.parse(data);
  	db.players = db.players.players;
});

fs.readFile(__dirname+'/data/jogosPorJogador.json', 'utf8', function (err, data) {
	if (err) throw err;
  	db["jogosPorJogador"] = JSON.parse(data);
});

// configurar qual templating engine usar. Sugestão: hbs (handlebars)
app.set('view engine', 'hbs');
app.set('views', './views');

// EXERCÍCIO 2
// definir rota para página inicial --> renderizar a view index, usando os
// dados do banco de dados "data/jogadores.json" com a lista de jogadores
// dica: o handler desta função é bem simples - basta passar para o template
//       os dados do arquivo data/jogadores.json

// EXERCÍCIO 3
// definir rota para página de detalhes de um jogador --> renderizar a view
// jogador, usando os dados do banco de dados "data/jogadores.json" e
// "data/jogosPorJogador.json", assim como alguns campos calculados
// dica: o handler desta função pode chegar a ter umas 15 linhas de código


// EXERCÍCIO 1
// configurar para servir os arquivos estáticos da pasta "client"
// dica: 1 linha de código
app.use(express.static('client'));

// abrir servidor na porta 3000
// dica: 1-3 linhas de código
app.listen(3000, function () {
	console.log ("Server listening at http://127.0.0.1:3000");
});
