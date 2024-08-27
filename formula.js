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
    "POLTRONA UAUPÉS - CORDA NAUTICA 6MM VILLE": 282,
    "CADEIRA ILHA BELA - CORDA NAUTICA 6MM PETE": 65,
    "BALANÇO OQUENA - SLIM": 11.95,
    "BALANÇO OQUENA - CORDA NAUTICA 6MM VILLE": 610.55,
    "ESPREGUIÇADEIRA DUNAS - FIBRA 10MM": 281,
    "CDCB PONTA NEGRA - CORDA NAUTICA CHATA 10MM": 63,
    "POLTRONA CABO BRANCO - FIBRA 10MM": 92.76,
    "MESA DE CENTRO ILHÉUS D70 - SLIM": 16.43,
    "MESA DE CENTRO ILHÉUS D70 - CORDA NAUTICA 6MM VILLE": 139,
    "BANCO ATLÂNTICO - SLIM": 37.5,
    "BANCO ATLÂNTICO - CORDA NAUTICA CHATA 10MM": 121.25,
    "POLTRONA CANOA QUEBRADA - 5MM PETE": 154.12,
    "CHAISE CANOA QUEBRADA - 5MM PETE": 292.15,
    "CHAISE CANOA QUEBRADA - CORDA SINTETICA": 229.22,
    "PUFF TULIPA - 6MM PETE": 161.39,
    "MESA DE CENTRO CONQUEIRINHO - 5MM PETE:": 190.50,
    "SOFÁ COQUEIRINHO - 6MM PETE": 273,
    "MESA DE CENTRO COQUEIRINHO - 6MM VILLE": 167,
    "LUMINARIA PEPITA DE CHÃO (G) - 6MM VILLE": 142,
    "CDCB ILHÉUS - 6MM VILLE": 96,
    "PUFF CAXIXE - 6MM VILLE": 182,
    "PUFF PONTA NEGRA - CHATA 10MM": 56,
    "CDSB ATLÂNTICO - CHATA 10MM": 72,
    "CDSB ATLÂNTICO - SLIM": 11.25,
    "POLTRONA CORAL - 5MM PETE": 154.52,
    "LUMINARIA PEPITA (GG)- 6MM VILLE": 167,
    "OKA PET - SLIM": 25,
    "ESPREGUIÇADEIRA ONDINA - 5MM PETE": 282,
    "POLTRONA ACAU - 5MM PETE": 160,
    "CDCB ANOZ - 5MM PETE": 160,
    "POLTRONA FOLE - 6MM PETE": 176,
    "CHAISE FOLE - 6MM PETE": 160.54,
    "BANQUETA PRAIANHA - CORDA SINTÉTICA": 57.15,
    "MESA DE CENTRO ZAMBUM - 6MM PETE": 236.14,
    "BASE DO BALANÇO OQUENA - 6MM VILLE": 110.80,
    "CHAISE REGIA - SLIM": 12.43,
    "CHAISE REGIA - CHATA 10MM": 566.2,
    "MESA BISTRÔ ILHEUS - 6MM PETE":183.33,
    "PUFF ILHÉUS - SLIM": 11.55,
    "PUFF ILHÉUS - CHATA 10MM":68.60,
    "BANQUETA ATLÂNTICO - SLIM":12.15,
    "BANQUETA ATLÂNTICO - CHATA 10MM":68.95,
    "BANQUINHO CANOA QUEBRADA - 5MM PETE": 36.31,
    "POLTRONA PONTA NEGRA - CHATA 10MM": 103.11,
    "BANQUETA ILHÉUS- 6MM VILLE": 105.88,
    "MESA DE CENTRO TOCA (P)": 59,
    "BALANÇO NIN - 6MM PETE": 641,
    "POLTRONA JAGUARIBE - 6MM PETE": 367.30,
    "NAMORADEIRA - 6MM VILLE": 404,
    "VELEIRO (BASE) - 6MM VILLE": 423,
    "GASSUM - 5MM PETE": 219.5,
    "BANCO TABATINGA - FIBRA 10MM": 105,
    "POLTRONA COCAR - 6MM": 131.25,
    "POLTRONA COCAR - 5MM": 142.10,
    "POLTRONA FULÃO - 5MM PETE": 130,
    "SOFÁ FOLE 2L - 6MM PETE": 275,
    "POLTRONA BUZIOS - 6MM VILLE": 145.90,
    "POLTRONA TEAR - TRICÔ 40MM": 20.95,
    "POLTRONA TEAR - 6MM PETE": 45.3,
    "MESA LATERAL MARAJÓ D55": 70.84,
    "LUMINARIA GRAMAME D40 A D30": 70.84,
    "POLTRONA ANOZ - TRICÔ 40MM": 16.38,
    "BALANÇO PRAIA DAS CONCHAS - 6MM VILLE": 130.6,
    "POLTRONA FULÃO - 6MM VILLE": 90.3,
 
 
 
     
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


