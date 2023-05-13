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

    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCEPConvertida = await consultaCEP.json()

        if (consultaCEPConvertida.erro) {
            throw Error('CEP não existente!')
        }

        console.log(consultaCEPConvertida);
        return consultaCEPConvertida;
        
    }   catch (erro) {
        console.log(erro)
    }
    
}

var cep = document.getElementById('cep');
cep.addEventListener("focosout", () => buscaEndereco(cep, value));





