const listaCards = (caminho) => {
    return fetch(`http://localhost:3000/produtos${caminho}`)
        .then(resposta => {
            return resposta.json()
        })
}

const listaProfile = () => {
    return fetch(`http://localhost:3000/profile`)
        .then(resposta => {
            return resposta.json()
        })
}

const removeCard = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    })
}

const cadastraProduto = (imagem, categoria, nome, valor, descricao) => {
    return fetch(`http://localhost:3000/produtos`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            categoria: categoria,
            nome: nome,
            valor: valor,
            descricao: descricao
        })
    }).then(resposta => {
        return resposta.body
    })
}

const cadastraRodape = (nome, descricao) => {
    return fetch(`http://localhost:3000/profile`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            descricao: descricao
        })
    }).then(resposta => {
        return resposta.body
    })
}

const detalhaProduto = (id) => {
    return fetch(`http://localhost:3000/produtos/${id}`)
    .then( resposta => {
        return resposta.json()
    })
}

const atualizaProduto = (id, imagem, categoria, nome, valor, descricao) => {
    return fetch(`http://localhost:3000/produtos/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            categoria: categoria,
            nome: nome,
            valor: valor,
            descricao: descricao
        })
    }).then(resposta => {
        return resposta.json()
    })
}

export const clienteService = {
    listaCards,
    listaProfile,
    removeCard,
    cadastraProduto,
    cadastraRodape,
    detalhaProduto,
    atualizaProduto
}