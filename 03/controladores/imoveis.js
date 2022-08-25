const imoveis = require('../dados/imoveis');

function consultarImoveis(req, res) {
  res.send(imoveis);
}

function consultarImovelPorId(req, res) {
  const imovelEncontrado = imoveis.find((imovel) => {
    return imovel.id === Number(req.params.id);
  })

  if (!imovelEncontrado) {
    res.send("Imóvel não encontrado.")
  } else {
    res.send(imovelEncontrado)
  }
}

module.exports = { consultarImoveis, consultarImovelPorId };