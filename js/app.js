
// Guarda as informações do Form
const formCadastro = document.querySelector("#formCadastro");

// Adiciona um Ouvinte de Evento de Submit do form
formCadastro.addEventListener("submit", (envio) => {
    envio.preventDefault();

    alert("Cadastro efetuado com sucesso!");

    // Limpa os campos do form
    formCadastro.reset();
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
        .then((dados) => {
            if (dados.erro) {
                console.error("CEP inválido: ", dados.erro);

                // Limpa os campos do Endereço
                formCadastro.logradouro.value = "";
                formCadastro.bairro.value = "";
                formCadastro.cidade.value = "";
                formCadastro.uf.value = "";
                formCadastro.numero.value = "";
                formCadastro.complemento.value = "";

                return;
            }

            // Preenche os campos do form
            formCadastro.logradouro.value = dados.logradouro;
            formCadastro.bairro.value = dados.bairro;
            formCadastro.cidade.value = dados.localidade;
            formCadastro.uf.value = dados.uf;

            // Coloca o foco no campo Número
            formCadastro.numero.focus();
        })
        
        // Se houver erro, captura
        // .catch(erro => {
        //     console.error("CEP inválido: ", erro);
        // });

        // * ATENÇÃO: a API ViaCEP não tem um comportamento específico
        // para quando o CEP tem 8 dígitos mas não existe,
        // ela não retorna um erro HTTP (não cai no .catch)
}
