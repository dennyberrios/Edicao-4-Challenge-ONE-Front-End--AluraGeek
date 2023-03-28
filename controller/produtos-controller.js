import { clienteService } from "../server/cliente-service.js";

(async () => {

    const pegaURL = new URL(window.location);

    const id = pegaURL.searchParams.get("id")

    const dados = await clienteService.detalhaProduto(id)

    const imagem = dados.imagem;
    const nome = dados.nome;
    const valor = dados.valor;
    const descricao = dados.descricao;
    const categoria = dados.categoria;

    const criaCardSelecionado = (imagem, nome, valor, descricao) => {
        const cardContainer = document.createElement("div");
        const card = `
                 <div class="produtos__imagem" style="background-image: url('${imagem}');"></div>
                <div class="produtos__conteudo">
                    <h3 class="produtos__nome">${nome}</h3>
                    <p class="produtos__valor">${valor}</p>
                    <p class="produtos__descricao">${descricao}</p>
                </div>
        `
        cardContainer.className = "produtos__container"
        cardContainer.innerHTML = card;
        return cardContainer
    }

    const produto = document.querySelector("[data-produto]");

    produto.appendChild(criaCardSelecionado(imagem, nome, valor, descricao))

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

    const ProdutosSimilares = document.querySelector("[data-conteudo]");

    const render = async () => {
        const caminho = ['?categoria=Star Wars', '?categoria=Consoles', '?categoria=Diversos'];
        var lista;

        if (categoria == "Star Wars") {
            lista = await clienteService.listaCards(caminho[0]);
        }else{
            if (categoria == "Consoles") {
                lista = await clienteService.listaCards(caminho[1]);
            }else{
                if(categoria == "Diversos"){
                    lista = await clienteService.listaCards(caminho[2]);
                }else{
                    lista = await clienteService.listaCards("");
                }
            }
        }

        if (innerWidth <= 360) {
            for (var i = 0; i < 4; i++) {
                ProdutosSimilares.appendChild(criaCardsCliente(lista[i].imagem, lista[i].nome, lista[i].valor, lista[i].id))
            }
        } else {
            if (innerWidth >= 361) {
                for (var i = 0; i < 6; i++) {
                    ProdutosSimilares.appendChild(criaCardsCliente(lista[i].imagem, lista[i].nome, lista[i].valor, lista[i].id))
                }
            }
        }
    }
    render()
})()