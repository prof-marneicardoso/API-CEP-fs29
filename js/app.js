
// Guarda as informações do Form
const formCadastro = document.querySelector("#formCadastro");

// Adiciona um Ouvinte de Evento de Submit do form
formCadastro.addEventListener("submit", (envio) => {
    envio.preventDefault();

    alert("Cadastro efetuado com sucesso!");
});

// Guarda as informações do input do CEP
const cep = document.querySelector("#cep");

// Adiciona um Ouvinte de Evento de input (quando o usuário digitar o CEP)
cep.addEventListener("input", () => {
    if (cep.value.length == 8) {
        buscarCEP();

    } else {
        console.log("O CEP precisa ter 8 números");
    }
});

function buscarCEP() {
    // URL do ViaCEP
    const url = `https://viacep.com.br/ws/${cep.value}/json/`;
    // const url = `https://viacep.com.br/ws/01001000/json/`;

    // Envia o CEP para a API ViaCEP
    fetch(url)
        // Se tiver retorno, converte para JSON
        .then(response => response.json())
        
        // Mostra os dados
        .then(dados => {
            console.log(dados)
        })
        
        // Se houver erro, captura
        .catch(erro => {
            console.error("CEP inválido");
        });
}
