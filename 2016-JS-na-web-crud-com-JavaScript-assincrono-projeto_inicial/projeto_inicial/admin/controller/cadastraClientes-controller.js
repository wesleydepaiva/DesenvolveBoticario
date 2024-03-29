//importa função através da const que reúne todas as funções
import {clienteService} from '../service/cliente-service.js'

//utilizando o query selector para interagir com o DOM
const formulario = document.querySelector('[data-form]')

//utilizando o addEventListener para interagir com o DOM, 'ouvindo' as ações e realizando algo.
formulario.addEventListener('submit', async (evento) => {
    //este método preventDefault previne contra o envio sem verificação
    evento.preventDefault()
    const nome = evento.target.querySelector('[data-nome]').value 
    const email = evento.target.querySelector('[data-email]').value 

    try {
        await clienteService.criaCliente(nome, email)
        window.location.href = '../telas/cadastro_concluido.html'
    } catch(erro) {
        console.log(erro)
        window.location.href = '../telas/erro.html'
    }
    
})