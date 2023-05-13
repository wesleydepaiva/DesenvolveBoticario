/*

Esta forma utiliza muitos THEN e acaba acontecendo o CALLBACK HELL.

//uso o FETCH para utilizar uma API
let consultaCEP = fetch('https://viacep.com.br/ws/01001250/json/')
//utilizo o THEN para tratar os dados, pois JSON parece com objeto.
.then(resposta => resposta.json())
//Faço uma condicional para verificar se está correta a validação ou não.
.then(r => {
    if (r.erro) {
        throw Error('Esse CEP não existe!')
    } else 
        console.log(r)
    })
//Este CATCH pega o erro jogado pelo THROW e mostra o resultado
.catch(erro => console.log(erro));

*/

async function buscaEndereco(cep) {

    let mensagemErro = document.getElementById('erro');
    //com o innerHTML conseguimos alterar diretamente o html 
    mensagemErro.innerHTML = "";

    try {
        let consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCEPConvertida = await consultaCEP.json()

        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!')
        }

        // pegar os dados do objeto, através do getElementById
        let cidade = document.getElementById('cidade');
        let logradouro = document.getElementById('endereco');
        let estado = document.getElementById('estado');
        let bairro = document.getElementById('bairro')

        // acesso o valor do objeto, e altero seu valor, utilizando o .value, atribuindo o item específico deste objeto após tratado.
        cidade.value = consultaCEPConvertida.localidade;
        logradouro.value = consultaCEPConvertida.logradouro;
        estado.value = consultaCEPConvertida.uf;
        bairro.value = consultaCEPConvertida.bairro;

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
        
    }   catch (erro) {
        mensagemErro.innerHTML =  `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
    
}

//estas duas linhas de código abaixo pegam o campo CEP e ativam a função após clicar em outra parte para tirar o foco, com o "focusout"
let cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));





