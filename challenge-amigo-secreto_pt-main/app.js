let amigos = ['João', 'José', 'Bruna', 'Marianna', 'Bianca', 'Vanessa', 'Elisabete'];

function adicionarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nomeAmigo = inputAmigo.value.trim();

  if (nomeAmigo === '') {
    alert('Por favor, insira um nome válido.');
    return;
  }

  amigos.push(nomeAmigo);
  atualizarListaAmigos();

  inputAmigo.value = '';
}

function atualizarListaAmigos() {
  const listaAmigos = document.getElementById('listaAmigos');
  listaAmigos.innerHTML = ''; 

  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Adicione pelo menos dois amigos para sortear.');
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`;
}

window.onload = atualizarListaAmigos;