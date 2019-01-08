var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var db = require('./config/db');

app.disable('x-powered-by');

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var api = {};
api.entorpecentes = require('./modules/entorpecentes/routes');

app.use('/api/v1/entorpecentes', api.entorpecentes);

/* Hello API */
app.get("/api", function(req, resp) {
	resp.send("App! Funcionando teste");
});

app.listen(3000, function(){
  console.log("Servidor rodando na porta 3000");
});


module.exports = app;