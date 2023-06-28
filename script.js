// BUG DO "NAO"

document.getElementById('não').addEventListener('mouseover', mudarPosicao);

function mudarPosicao(event) {
  var botao = event.target;
  var novaPosicaoX = Math.floor(Math.random() * window.innerWidth);
  var novaPosicaoY = Math.floor(Math.random() * window.innerHeight);
  
  botao.style.position = 'absolute';
  botao.style.left = novaPosicaoX + 'px';
  botao.style.top = novaPosicaoY + 'px';
}

// JANELA NOVA
document.getElementById('sim').addEventListener('click', abrirNovaJanela);

function abrirNovaJanela() {
  // URL da nova janela
  var url = '/sim.html'; // Substitua pela URL desejada

  // Configurações da nova janela
  var janela = window.open(url);

  // Verifica se a nova janela foi bloqueada por um bloqueador de pop-ups
  if (janela === null || typeof janela === 'undefined') {
    alert('A nova janela foi bloqueada pelo seu navegador. Verifique suas configurações de bloqueio de pop-ups.');
  }
}