import { clienteService } from "../server/cliente-service.js"

(async () => {
    const nome = document.querySelector("[data-nome]")
    const senha = document.querySelector("[data-senha]")

    const formulario = document.querySelector("[data-form]")

    formulario.addEventListener("submit", async (evento) => {
        evento.preventDefault()

        const dadosProfile = await clienteService.listaProfile()
        if ((nome.value == dadosProfile[0].nome) && (senha.value == dadosProfile[0].senha)) {
            window.location.href = "./../pages/todos-os-produtos.html";
        }
    })
    setTimeout(() => {
        alert(`Olá seja bem vindo. \n Login: adm \n Senha: adm`)
    }, "1000")
})()