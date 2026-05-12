// Controle do menu responsivo em telas menores
const botaoMenu = document.getElementById("botaoMenu");
const linksMenu = document.getElementById("linksMenu");

botaoMenu.addEventListener("click", function () {
    linksMenu.classList.toggle("ativo");
});

// Fecha o menu após o clique em algum link
const links = document.querySelectorAll(".links-menu a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        linksMenu.classList.remove("ativo");
    });
});

// Validação do formulário de contato
const formContato = document.getElementById("formContato");
const mensagemRetorno = document.getElementById("mensagemRetorno");

formContato.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    // https://pt.stackoverflow.com/questions/1386/express%c3%a3o-regular-para-valida%c3%a7%c3%a3o-de-e-mail
    const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

    if (nome === "" || email === "" || mensagem === "") {
        mostrarMensagem("Por favor, preencha todos os campos.", "erro");
        return;
    }

    if (!emailValido.test(email)) {
        mostrarMensagem("Por favor, informe um e-mail válido.", "erro");
        return;
    }

    mostrarMensagem("Mensagem enviada com sucesso! Obrigado pelo contato.", "sucesso");

    // Limpa os campos após a simulação de envio
    formContato.reset();
});

// Função para exibir mensagem visual de erro ou sucesso
function mostrarMensagem(texto, tipo) {
    mensagemRetorno.textContent = texto;
    mensagemRetorno.className = "mensagem-retorno " + tipo;
}
