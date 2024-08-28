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
    "CDSB ONDINA - 5MM PETE": 91.60,
    "CDSB ATLÂNTICO - SLIM": 11.25,
    "CDCB ATLÂNTICO - CHATA 10MM": 72,
    "POLTRONA JACUMÃ - 5MM PETE": 359,
    "CDCB PONTA NEGRA - CHATA 10MM":63,
    "PUFF CAXIXE - 6MM VILLE":182.74,
    "PUFF ILHEUS - 5MM PETE": 97,
    "ESPREGUIÇADEIRA DUNAS - FIBRA 10MM": 281,
    "MESA BISTRÔ ILHÉUS - 6MM PETE": 184,
    "LUMINARIA PEPITA DE CHÃO G - 6MM VILLE": 142.66,
    "PUFF ILHÉUS - 6MM VILLE": 104,
    "ESPREGUIÇADEIRA DUNAS - FIBRA 10MM": 281,
    "CDCB PONTA NEGRA - CHATA 10MM": 63,
    "POLTRONA CABO BRANCO - CHATA 10MM": 92.76,
    "SOFÁ PONTA DE CAMPINA C/ MESA LATERAL 2L":100.38,
    "MESA DE CENTRO ILHÉUS D70 - SLIM": 16.27,
    "MESA DE CENTRO ILHÉUS D70 - 6MM VILLE": 132,
    "BANCO ATLÂNTICO  - SLIM": 37.5,
    "BANCO ATLÂNTICO - CHATA 10MM": 99,
    "SOFÁ PONTA DE CAMPINA 3L - CHATA 10MM": 138,
    "LUMINARIA PEPITA DE CHÃO G - 6MM VILLE": 142,
    "PUFF ILHÉUS - 6MM VILLE": 98.25,
    "PUFF CAXIXE - 6MM VILLE": 182.74,
    "POLTRONA CORAL - 5MM PETE": 147.03,
    "LUMINARIA PEPITA GG - 6MM VILLE": 167,
    "BANQUETA PRAINHA - CORDA SINTÉTICA": 57.15,
    "BANQUINHO CANOA QUEBRADA - 5MM PETE": 36.31,
    "BANQUETA ILHÉUS - 6MM PETE": 105.88,
    "MESA DE CENTRO TOCA P - 6MM VILLE": 59,
    "BASE VELEIRO - 6MM VILLE": 423,
    "POLTRONA FULÃO - 5MM PETE": 130.05,
    "SOFÁ FOLE 2L - 6MM PETE": 275.52,
    "CDCB TAMBAÚ - 6MM VILLE": 105.87,
    "CDCB ILHA BELA - 6MM VILLE": 58,
    
   
     
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


