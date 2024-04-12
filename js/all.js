function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
}
function goToHomePage() {
    window.location.href = "http://127.0.0.1:5500/index.html"; // Substitua pelo URL da sua página inicial
}
function pageNavigation(option) {

    switch (option) {
        case 'filmes':
            window.location.href = 'filmes.html';
            break;
        case 'legendados':
            window.location.href = 'legendados.html';
            break;
        case 'novidades':
            window.location.href = 'novidade.html';
            break;
        default:
            break;
    }
}
function filtrarImagens() {
    var termoPesquisa = document.getElementById("pesquisa").value.toLowerCase();
    var imagens = document.querySelectorAll("img");

    var algumResultadoEncontrado = false; // Variável para controlar se algum resultado foi encontrado

    imagens.forEach(function (imagem) {
        var nomeImagem = imagem.getAttribute("data-nome").toLowerCase();
        var textoAssociado = imagem.nextElementSibling.querySelectorAll("h4, p");
        if (nomeImagem.includes(termoPesquisa)) {
            imagem.style.display = "inline-block";
            textoAssociado.forEach(function (elemento) {
                elemento.style.display = "block";
            });
            algumResultadoEncontrado = true; // Um resultado foi encontrado
        } else {
            imagem.style.display = "none";
            textoAssociado.forEach(function (elemento) {
                elemento.style.display = "none";
            });
        }
    });

    // Exibir a mensagem "Nenhum resultado encontrado" se nenhum resultado for encontrado
    var mensagemNenhumResultado = document.getElementById("mensagem-nenhum-resultado");
    if (!algumResultadoEncontrado) {
        mensagemNenhumResultado.style.display = "block";
    } else {
        mensagemNenhumResultado.style.display = "none";
    }
}