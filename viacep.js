// Adiciona um ouvinte de evento ao botão
document.getElementById("fetchButton").addEventListener("click", fazerRequisicao);
// Função para fazer a requisição usando a API Fetch
function fazerRequisicao() {
    // Faz a requisição GET para a URL especificada
    fetch('https://viacep.com.br/ws/95701-208/json/')
        .then(response => response.json())
        .then(data => {
            const resultadoDiv = document.getElementById("resultado");
            // Exibe os dados do JSON na div de resultado
            resultadoDiv.innerHTML = `
            <p>CEP: ${data.cep}</p>
            <p>Logradouro: ${data.logradouro}</p>
            <p>Complemento: ${data.complemento}</p>
            <p>Bairro: ${data.bairro}</p>
            <p>Localidade: ${data.localidade}</p>
            <p>UF: ${data.uf}</p>
            <p>IBGE: ${data.ibge}</p>
            <p>GIA: ${data.gia}</p>
            <p>DDD: ${data.ddd}</p>
            <p>SIAFI: ${data.siafi}</p>
            
        `;
        })
        // Exibe mensagem para console de erro
        .catch(error => {
            console.error('Ocorreu um erro:', error);
        });
}
