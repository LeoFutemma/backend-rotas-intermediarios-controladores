const express = require('express');
const { informarJogador, removerJogador, adicionarJogador } = require('./roundcontroller')

const app = express();

app.get('/', informarJogador);
app.get('/remover', removerJogador);
app.get('/adicionar', adicionarJogador);

app.listen(8000);