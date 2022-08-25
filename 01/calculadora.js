let total;
const insiraNumeros = 'Por favor, entre dois números na URL seguindo o formato "?num1=X&num2=Y", onde X e Y sejam os números escolhidos.';

function somar(req, res) {
  const { num1, num2 } = req.query;
  total = Number(num1) + Number(num2);

  if (!num1 || !num2) {
    res.send(insiraNumeros);
    return;
  }
  res.send(`A soma de ${num1} e ${num2} é ${total}`);
}

function subtrair(req, res) {
  const { num1, num2 } = req.query;
  total = Number(num1) - Number(num2);

  if (!num1 || !num2) {
    res.send(insiraNumeros);
    return;
  }
  res.send(`A subtração de ${num1} e ${num2} é ${total}`);
}

function multiplicar(req, res) {
  const { num1, num2 } = req.query;
  total = Number(num1) * Number(num2);

  if (!num1 || !num2) {
    res.send(insiraNumeros);
    return;
  }
  res.send(`A multiplicação de ${num1} por ${num2} é ${total}`);
}

function dividir(req, res) {
  const { num1, num2 } = req.query;
  total = Number(num1) / Number(num2);

  if (!num1 || !num2) {
    res.send(insiraNumeros);
    return;
  }
  res.send(`A divisão de ${num1} por ${num2} é ${total}`);
}

module.exports = { somar, subtrair, multiplicar, dividir };