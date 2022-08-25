const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let posicao = 0;

function informarJogador(req, res) {
  if (posicao >= jogadores.length) {
    posicao = 0;
  }
  res.send(`É a vez de ${jogadores[posicao]} jogar!`);
  posicao++;
}

function removerJogador(req, res) {
  const { indice } = req.query;

  if (!indice) {
    res.send('Por favor insira na URL, seguindo o formato "?indice=X", um número para X onde X é o índice do jogador a ser removido da rodada');
    return;
  }
  if (indice >= jogadores.length) {
    res.send(`Não existe jogador no índice informado (${indice}) para ser removido.`);
    return;
  }
  jogadores.splice(indice, 1);
  res.send(jogadores);
}

function adicionarJogador(req, res) {
  const { nome, indice } = req.query;
  const nomeFormatado = nome[0].toUpperCase() + nome.slice(1).toLowerCase();

  if (!nome) {
    res.send('Por favor insira na URL, seguindo o formato "?nome=X", o nome do novo jogador no lugar de X');
    return;
  }

  if (indice) {
    if (indice >= jogadores.length) {
      res.send(`O índice informado (${indice}) não existe no array. Novo jogador não adicionado.`)
      return;
    }
    jogadores.splice(indice, 0, nomeFormatado);
    res.send(jogadores);
    return;
  }

  jogadores.push(nomeFormatado);
  res.send(jogadores);
}

module.exports = { informarJogador, removerJogador, adicionarJogador }