





// Guarda as informações do input do CEP
const cep = document.querySelector("#cep");

// Adiciona um Ouvinte de Evento de input (quando o usuário digitar o CEP)
cep.addEventListener("input", (evento) => {
    if (cep.value.length == 8) {
        buscarCEP();

    } else {
        console.log("O CEP precisa ter 8 números");
    }
});

function buscarCEP() {
    console.log("buscarCEP");
}