const express = require('express');
const { somar, subtrair, multiplicar, dividir } = require('./calculadora');

const app = express();

app.get('/somar', somar);
app.get('/subtrair', subtrair);
app.get('/multiplicar', multiplicar);
app.get('/dividir', dividir);
app.listen(8000);