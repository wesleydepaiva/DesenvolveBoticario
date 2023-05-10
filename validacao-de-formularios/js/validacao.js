const dataNascimento = document.querySelector('#nascimento')

dataNascimento.addEventListener('blur', (evento) => {
    validaDataNascimento(evento.target)
}) 


// Esta função tem o objetivo de, na hora que a pessoa tentar enviar a data de nascimento, validar ou não o que foi passado. Mostrando uma mensagem de erro ou apenas concluindo o cadastro.
function validaDataNascimento(input) {
    const dataRecebida = new Date(input.value)
    let mensagem = ""

    if (!maiorQue18(dataRecebida)){
        mensagem = "Você deve ser maior que 18 anos para se cadastrar."
    }
    
    input.setCustomValidity(mensagem)
}

// Esta função pega a data atual, soma com mais 18 anos, para definir um método de verificação. Se a data que o usuário inseriu + 18 anos, é maior do que a data atual, ele não tem 18 anos.
function maiorQue18(data) {
    const dataAtual = new Date()
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDate())

    //Se dataMais18 é menor ou igual a data atual, retorne true. Caso contrário, retorne False.
    return dataMais18 <= dataAtual
}