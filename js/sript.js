function scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

function goToHomePage() {
    window.location.href = "http://127.0.0.1:5500/index.html"; 
}

  function pageNavigation(option) {
  
    switch(option) {
        case 'filmes':
            window.location.href = 'view/filmes.html';
            break;
        case 'legendados':
            window.location.href = 'view/legendados.html';
            break;
        case 'novidades':
            window.location.href = 'view/novidade.html';
            break;
        default:
            break;
    }  
}   
function filtrarImagens() {
    var termoPesquisa = document.getElementById("pesquisa").value.trim().toLowerCase();
    var imagens = document.querySelectorAll(".col-md-3");
    var headers = document.querySelectorAll("h2, h3");

    var algumResultadoEncontrado = false; // Variável para controlar se algum resultado foi encontrado

    imagens.forEach(function(coluna) {
        var imagem = coluna.querySelector("img");
        var nomeImagem = imagem.getAttribute("data-nome");
        if (nomeImagem && nomeImagem.toLowerCase().includes(termoPesquisa)) {
            coluna.style.display = "block";
            algumResultadoEncontrado = true; // Um resultado foi encontrado
        } else {
            coluna.style.display = "none";
        }
    });

    if (algumResultadoEncontrado) {
        // Se algum resultado for encontrado, esconder a mensagem "Nenhum resultado encontrado"
        document.getElementById("mensagem-nao-encontrado").style.display = "none";
    } else {
        // Se nenhum resultado for encontrado, mostrar a mensagem "Nenhum resultado encontrado"
        document.getElementById("mensagem-nao-encontrado").style.display = "block";
    }

    if (termoPesquisa === "") {
        headers.forEach(function(header) {
            header.style.display = "block";
        });
        // Mostrar o carousel quando não há pesquisa
        document.getElementById("carouselExampleAutoplaying").style.display = "block";
    } else {
        headers.forEach(function(header) {
            header.style.display = "none";
        });
        // Ocultar o carousel quando há pesquisa
        document.getElementById("carouselExampleAutoplaying").style.display = "none";
    }
}


