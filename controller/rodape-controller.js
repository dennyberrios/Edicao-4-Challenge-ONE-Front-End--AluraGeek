import { clienteService } from "../server/cliente-service.js";

(async () => {
    
    const formularioRodape = document.querySelector("[data-form='rodape']");

    formularioRodape.addEventListener("submit", async (evento) => {
        evento.preventDefault()

        const nome = evento.target.querySelector("[data-rodape='Nome']").value
        const descricao = evento.target.querySelector("[data-rodape='ariaDeTexto']").value

        clienteService.cadastraRodape(nome, descricao)
    })
})()