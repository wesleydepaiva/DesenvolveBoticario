const listaClientes = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possível listar os clientes')
        
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
        if(resposta.ok) {
            return resposta.body
        }
        throw new Error('Não foi possível criar um cliente.')
    })

}

//adicionando a função remover, e indicando o método 'DELETE' ao servidor
const removeCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    }).then (resposta => {
        if(!resposta.ok) {
            throw new Error('Não foi possível remover um cliente')
        }
    })
}

const detalhaCliente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        if(resposta.ok) {
            return resposta.json()
        } 
        throw new Error ('Não foi possível detalhar o cliente')
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
        if(resposta.ok) {
            return resposta.json()
        }
        throw new Error('Não possível atualizar um cliente')
        
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