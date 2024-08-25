// function i nformação(strokes, size, waste){

//      if (strokes === undefined || size === undefined || waste === undefined){
//           console.log("Esta função precisa ter os 3 valores.");
//      }else{
//           return strokes * size - waste;
//      }
// }
// console.log(informação(50, 1.70, 2));
 
// Função para calcular a informação
function informação() {
    let strokes = document.getElementById("strokes").value;
    let size = document.getElementById("size").value;
    let waste = document.getElementById("waste").value;
    console.log(strokes * size - waste);
    let media = strokes * size - waste;
    document.getElementById("resultado").innerHTML = "Resultado: " + media;
}

// Dados simulados (pode ser substituído por dados reais ou uma chamada a um serviço/API)
const inventario = {
    "CDSB DUNAS - CORDA SINTÉTICA": 88.66,
    "CDSB DUNAS - MEIA CANA": 31.11,
    "ESPREGUIÇADEIRA DUNAS - CHATA 10MM": 462.22,
    "MESA BISTRÔ DUNAS D60 - CORDA SINTETICA": 133,
    "CDSB ONDINA - CORDA NÁUTICA 5MM (PETE)": 91.60,
    "SOFÁ BOA VIAGEM 2L - FIBRA 10MM": 78,12,
    "POLTRONA UAUPÉS - CORDA NÁUTICA 6MM (VILLE)": 282,
    "BALANÇO OQUENA - CORDA NÁUTICA 6MM (VILLE)": 610.55,
    // Adicione mais itens conforme necessário
};

// Função para consultar a quantidade
function consultarQuantidade() {
    const nomeObjeto = document.getElementById("objeto").value.trim();

    if (nomeObjeto === "") {
        alert("Por favor, digite um nome de objeto.");
        return;
    }

    const quantidade = inventario[nomeObjeto];

    if (quantidade !== undefined) {
        document.getElementById("resulta").textContent = `Quantidade de ${nomeObjeto}: ${quantidade} metros`;
    } else {
        document.getElementById("resulta").textContent = `Objeto não encontrado no inventário.`;
    }
}

// Função para mostrar sugestões
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('objeto');
    const suggestionsList = document.getElementById('suggestions-list');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        suggestionsList.innerHTML = '';

        if (query) {
            const filteredSuggestions = Object.keys(inventario).filter(suggestion =>
                suggestion.toLowerCase().includes(query)
            );

            filteredSuggestions.forEach(suggestion => {
                const li = document.createElement('li');
                li.textContent = suggestion;
                li.addEventListener('click', () => {
                    searchInput.value = suggestion; // Preenche o campo de entrada com a sugestão clicada
                    suggestionsList.innerHTML = ''; // Limpa a lista de sugestões
                });
                suggestionsList.appendChild(li);
            });
        }
    });
});


