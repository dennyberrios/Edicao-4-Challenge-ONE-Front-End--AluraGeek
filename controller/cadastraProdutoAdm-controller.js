import { clienteService } from "./../server/cliente-service.js";

(async () => {
    const formulario = document.querySelector("[data-form]");

    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault()

        const imagem = evento.target.querySelector("[data-url]").value
        const categoria = evento.target.querySelector("[data-categoria]").value
        const nomeProduto = evento.target.querySelector("[data-nome]").value
        const valor = evento.target.querySelector("[data-preco]").value
        const descricao = evento.target.querySelector("[data-descricao]").value

        await clienteService.cadastraProduto(imagem, categoria, nomeProduto, valor, descricao)
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
