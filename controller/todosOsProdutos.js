import { clienteService } from "../server/cliente-service.js";

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

    const dataStarwars = document.querySelector("[data-conteudo='starwars']")
    const dataConsoles = document.querySelector("[data-conteudo='consoles']")
    const dataDiversos = document.querySelector("[data-conteudo='diversos']")

    const caminho = ['?categoria=Star Wars', '?categoria=Consoles', '?categoria=Diversos'];

    const starwars = async () => {
        const listaDeCards = await clienteService.listaCards(caminho[0]);
        listaDeCards.forEach(element => {
            dataStarwars.appendChild(criaCardsCliente(element.imagem, element.nome, element.valor, element.id))
        });
    }

    const consoles = async () => {
        const listaDeCards = await clienteService.listaCards(caminho[1]);
        listaDeCards.forEach(element => {

            dataConsoles.appendChild(criaCardsCliente(element.imagem, element.nome, element.valor, element.id))
        });
    }

    const diversos = async () => {
        const listaDeCards = await clienteService.listaCards(caminho[2]);
        listaDeCards.forEach(element => {
            dataDiversos.appendChild(criaCardsCliente(element.imagem, element.nome, element.valor, element.id))
        });
    }

    const render = () => {
        starwars()
        consoles()
        diversos()
    }
    render()

})()