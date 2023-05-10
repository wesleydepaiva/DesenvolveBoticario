import { valida } from "./validacao";

//pegando todos os inputs do HTML 
const inputs = document.querySelectorAll(input)

//para cada input, realize a função.
inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        valida(evento.target)
    })

})