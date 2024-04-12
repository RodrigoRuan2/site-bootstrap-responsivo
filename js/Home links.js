document.addEventListener("DOMContentLoaded", function () {
    var imagens = document.querySelectorAll(".nome-imagem img");
    imagens.forEach(function (imagem) {
        imagem.addEventListener("click", function () {
            var nome = this.getAttribute("data-nome");
            switch (nome) {
                case "Saijaku Tamer wa Gomi":
                    window.location.href = "https://animefire.plus/animes/saijaku-tamer-wa-gomi-hiroi-no-tabi-wo-hajimemashita-todos-os-episodios";
                    break;
                case "kami wa game":
                    window.location.href = "https://animesonline.nz/animes/kami-wa-game-ni-ueteiru-dublado/";
                    break;
                case "ookami to koushin":
                    window.location.href = "https://animesonline.nz/animes/ookami-to-koushinryou-merchant-meets-the-wise-wolf/";
                    break;
                case "Ninja Kamui":
                    window.location.href = "https://animesonline.nz/animes/ninja-kamui/";
                    break;
                case "solo leveling":
                    window.location.href = "https://animesonline.nz/animes/upando-sozinho/";
                    break;
                case "Re monster":
                    window.location.href = "https://animesonline.nz/animes/remonster/";
                    break;
                case "One piece":
                    window.location.href = "https://animesonline.nz/animes/one-piece/";
                    break;
                    case "dungeon meshi":
                    window.location.href = "https://animesonline.nz/animes/dungeon-meshi/";
                    break;
                    case "Yuru camp":
                    window.location.href = "https://animesonline.nz/animes/yuru-camp%e2%96%b3-3/";
                    break;
                    case "Yozakura-san Chi no Daisakusen":
                    window.location.href = "https://animesonline.nz/animes/yozakura-san-chi-no-daisakusen/";
                    break;
                    case "One Room, Hiatari Futsuu, Tenshi-tsuki":
                    window.location.href = "https://animesonline.nz/animes/one-room-hiatari-futsuu-tenshi-tsuki/";
                    break;
                default:
                    break;
            }
        });
    });
}); 