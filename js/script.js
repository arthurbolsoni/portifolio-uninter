// Script do portfólio: menu do celular e validação do formulário

// só roda depois que a página carrega
document.addEventListener("DOMContentLoaded", function () {
  iniciarMenu();
  iniciarFormulario();
});

// abre e fecha o menu no celular
function iniciarMenu() {
  var botao = document.getElementById("btn-menu");
  var menu = document.getElementById("menu");
  if (!botao || !menu) return;

  botao.addEventListener("click", function () {
    menu.classList.toggle("aberto");
  });
}

// valida o formulário de contato e simula o envio
function iniciarFormulario() {
  var form = document.getElementById("form-contato");
  if (!form) return; // as outras páginas não têm formulário

  form.addEventListener("submit", function (evento) {
    evento.preventDefault(); // não recarrega a página, só simula o envio

    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var mensagem = document.getElementById("mensagem");

    var valido = true;

    // Nome obrigatório
    if (nome.value.trim() === "") {
      mostrarErro(nome, "Informe seu nome.");
      valido = false;
    } else {
      limparErro(nome);
    }

    // E-mail obrigatório e com formato válido
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.value.trim() === "") {
      mostrarErro(email, "Informe seu e-mail.");
      valido = false;
    } else if (!regexEmail.test(email.value.trim())) {
      mostrarErro(email, "Digite um e-mail válido (ex.: usuario@dominio.com).");
      valido = false;
    } else {
      limparErro(email);
    }

    // Mensagem obrigatória
    if (mensagem.value.trim() === "") {
      mostrarErro(mensagem, "Escreva uma mensagem.");
      valido = false;
    } else {
      limparErro(mensagem);
    }

    // Se tudo certo: limpa os campos e avisa que foi enviado
    if (valido) {
      form.reset();
      alert("Mensagem enviada com sucesso!");
    }
  });
}

// mostra o aviso de erro embaixo do campo
function mostrarErro(campo, texto) {
  campo.classList.add("erro");
  campo.nextElementSibling.textContent = texto;
}

// tira o aviso de erro
function limparErro(campo) {
  campo.classList.remove("erro");
  campo.nextElementSibling.textContent = "";
}
