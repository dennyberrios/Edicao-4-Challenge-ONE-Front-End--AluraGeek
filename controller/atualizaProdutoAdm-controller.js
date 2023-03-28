import { clienteService } from "./../server/cliente-service.js";

(async () => {

    const pegaURL = new URL(window.location);

    const id = pegaURL.searchParams.get("id")

    const inputImagem = document.querySelector("[data-url]");
    const inputCategoria = document.querySelector("[data-categoria]");
    const inputNome = document.querySelector("[data-nome]");
    const inputValor = document.querySelector("[data-preco]");
    const inputDescricao = document.querySelector("[data-descricao]");

    const dados = await clienteService.detalhaProduto(id);
    inputImagem.value = dados.imagem;
    inputCategoria.value = dados.categoria;
    inputNome.value = dados.nome;
    inputValor.value = dados.valor
    inputDescricao.value = dados.descricao

    const formulario = document.querySelector("[data-form]");

    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault();


            await clienteService.atualizaProduto(id, inputImagem.value, inputCategoria.value, inputNome.value, inputValor.value, inputDescricao.value)
            window.location.href = "./../pages/todos-os-produtos.html";
    })

    const inputs = document.querySelectorAll("input")

    inputs.forEach(input => {
        if (input.dataset.preco === "preco") {
            SimpleMaskMoney.setMask(input, {
                prefix: 'R$ ',
                fixed: true,
                fractionDigits: 2,
                decimalSeparator: ',',
                thousandsSeparator: '.',
                cursor: 'end'
            })
        }
    })
})()