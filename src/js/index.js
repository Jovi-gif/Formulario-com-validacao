const formulario = document.getElementById("form");
const nome = document.getElementById("name");
const email = document.getElementById("email");
const telefone = document.getElementById("tel");
const mensagem = document.getElementById("message");
const campoObrigatorio = document.getElementsByClassName("campo-obrigatorio");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  verificarInputs();
});

function verificarInputs() {
  if(nome.value === ''){
    nome.classList.add("campo-nao-preenchido");
    campoObrigatorio[0].classList.add("campo-obrigatorio-ativo")
  } else {
    nome.classList.remove("campo-nao-preenchido");
    campoObrigatorio[0].classList.remove("campo-obrigatorio-ativo")
  }

  if(nome.value !== ''){
    nome.classList.add("campo-preenchido");
  } else {
    nome.classList.remove("campo-preenchido");
  }

  if(email.value === ''){
    email.classList.add("campo-nao-preenchido");
    campoObrigatorio[1].classList.add("campo-obrigatorio-ativo")
  } else {
    email.classList.remove("campo-nao-preenchido");
    campoObrigatorio[1].classList.remove("campo-obrigatorio-ativo")
  }

  if(email.value !== ''){
    email.classList.add("campo-preenchido");
  } else {
    email.classList.remove("campo-preenchido");
  }

  if(telefone.value === ''){
    telefone.classList.add("campo-nao-preenchido");
    campoObrigatorio[2].classList.add("campo-obrigatorio-ativo")
  } else {
    telefone.classList.remove("campo-nao-preenchido");
    campoObrigatorio[2].classList.remove("campo-obrigatorio-ativo")
  }

  if(telefone.value !== ''){
    telefone.classList.add("campo-preenchido");
  } else {
    telefone.classList.remove("campo-preenchido");
  }

  if(mensagem.value === ''){
    mensagem.classList.add("campo-nao-preenchido");
    campoObrigatorio[3].classList.add("campo-obrigatorio-ativo")
  } else {
    mensagem.classList.remove("campo-nao-preenchido");
    campoObrigatorio[3].classList.remove("campo-obrigatorio-ativo")
  }

  if(mensagem.value !== ''){
    mensagem.classList.add("campo-preenchido");
  } else {
    mensagem.classList.remove("campo-preenchido");
  }
}