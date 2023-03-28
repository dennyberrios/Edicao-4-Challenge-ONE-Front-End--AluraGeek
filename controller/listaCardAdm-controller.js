import { clienteService } from "./../server/cliente-service.js";

(async () => {

    const criaCardsAdm = (categoria, imagem, nome, valor, id) => {

        const criandoCard = document.createElement("div")
        const conteudo = `
            <div class="card__img" style="background-image: url(${imagem})">
                <div class="card__box-delete-exclui">
                    <img class="excluir" src="./../assets/img/excluir.svg" alt="Excluir">
                    <a href="./atualiza-produto.html?id=${id}"><img class="editar" src="./../assets/img/editar.svg" alt="Editar"></a>
                </div>
            </div>
            <p class="categoria">${categoria}</p>
            <p class="produto">${nome}</p>
            <p class="valor">${valor}</p>
            <p class="card__tag" >#${id}</p>
        `;

        criandoCard.className = "card";
        criandoCard.dataset.id = id;
        criandoCard.innerHTML = conteudo;

        return criandoCard
    }

    const dataConteudo = document.querySelector("[data-conteudo]")

    dataConteudo.addEventListener("click", async (evento) => {
        const BotaoExcluir = evento.target.className == 'excluir';
        if (BotaoExcluir) {
            const pegaCardId = evento.target.closest("[data-id]")
            let id = pegaCardId.dataset.id;
            await clienteService.removeCard(id)
            pegaCardId.remove()
        }
    })

    const listaAdm = async () => {
        const listaDeCards = await clienteService.listaCards('');
        listaDeCards.forEach(element => {
            dataConteudo.appendChild(criaCardsAdm(element.categoria, element.imagem, element.nome, element.valor, element.id))
        });
    }

    const render = () => {
        listaAdm()
    }
    render()
})()