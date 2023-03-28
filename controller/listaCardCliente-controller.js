import { clienteService } from "./../server/cliente-service.js";

(async () => {
    const criaCardsCliente = (imagem, nome, valor, id) => {
        const criandoCard = document.createElement("div")
        const conteudo = `
        <img class="card__img" src="${imagem}"
        alt="imagem do produto">
        <p class="produto">${nome}</p>
        <p class="valor">${valor}</p>
        <a class="card__link" href="./../pages/produto.html?id=${id}">Ver produto</a>
        `;

        criandoCard.className = "card";
        criandoCard.innerHTML = conteudo;

        return criandoCard
    }

    const caminho = ['?categoria=Star Wars', '?categoria=Consoles', '?categoria=Diversos'];

    const dataStarwars = document.querySelector("[data-starwars")
    const dataConsoles = document.querySelector("[data-consoles")
    const dataDiversos = document.querySelector("[data-diversos]")

    const starwars = async () => {
        const listaDeCards = await clienteService.listaCards(caminho[0]);
        if (innerWidth <= 360) {
            for (var i = 0; i < 4; i++) {
                dataStarwars.appendChild(criaCardsCliente(listaDeCards[i].imagem, listaDeCards[i].nome, listaDeCards[i].valor, lista[i].id))
            }
        } else {
            if (innerWidth >= 361) {
                for (var i = 0; i < 6; i++) {
                    dataStarwars.appendChild(criaCardsCliente(listaDeCards[i].imagem, listaDeCards[i].nome, listaDeCards[i].valor, listaDeCards[i].id))
                }
            }
        }
    }

    const consoles = async () => {
        const listaDeCards = await clienteService.listaCards(caminho[1]);
        if (innerWidth <= 360) {
            for (var i = 0; i < 4; i++) {
                dataConsoles.appendChild(criaCardsCliente(listaDeCards[i].imagem, listaDeCards[i].nome, listaDeCards[i].valor, lista[i].id))
            }
        } else {
            if (innerWidth >= 361) {
                for (var i = 0; i < 6; i++) {
                    dataConsoles.appendChild(criaCardsCliente(listaDeCards[i].imagem, listaDeCards[i].nome, listaDeCards[i].valor, listaDeCards[i].id))
                }
            }
        }
    }

    const diversos = async () => {
        const listaDeCards = await clienteService.listaCards(caminho[2]);
        if (innerWidth <= 360) {
            for (var i = 0; i < 4; i++) {
                dataDiversos.appendChild(criaCardsCliente(listaDeCards[i].imagem, listaDeCards[i].nome, listaDeCards[i].valor, lista[i].id))
            }
        } else {
            if (innerWidth >= 361) {
                for (var i = 0; i < 6; i++) {
                    dataDiversos.appendChild(criaCardsCliente(listaDeCards[i].imagem, listaDeCards[i].nome, listaDeCards[i].valor, listaDeCards[i].id))
                }
            }
        }
    }

    const render = () => {
        starwars()
        consoles()
        diversos()
    }
    render()
})()