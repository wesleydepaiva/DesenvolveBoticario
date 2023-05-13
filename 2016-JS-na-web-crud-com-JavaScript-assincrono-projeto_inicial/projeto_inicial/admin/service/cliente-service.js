const http = new XMLHttpRequest();

// primeiro argumento é o que quero falar com servidor, e o segundo é o endereço para onde irei enviar
//esse endereço é o arquivo com os dados dos clientes
http.open('GET', 'http://localhost:3000/profile');

//enviar nossa requisição
http.send()

//este .onload indica que ao carregar a página, acontecerá a instrução sinalizada na função anônima
http.onload = () => {
    const data = http.response
    console.log(data)
}