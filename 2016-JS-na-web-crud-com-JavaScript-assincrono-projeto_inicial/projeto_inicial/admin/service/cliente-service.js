const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        return resposta.json()
    })
}


const criaCliente = (nome, email) => {
    //fetch, porém agora como iremos enviar a informação, necessita de itens a mais, como o método, a informação que vai no header, a informação que irá no corpo (transformando-a em json) e retornando a resposta.
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        })
    })
    .then (resposta => {
        return resposta.body
    })

}

//adicionando a função remover, e indicando o método 'DELETE' ao servidor
const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',

    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        return resposta.json()
    })
}

const atualizaCliente = (id, nome, email) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            email: email
        }) 
    })
    .then( resposta => {
        return resposta.json()
    })

}

//funções exportadas de uma vez só através dessa const
export const clienteService = {
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente

}