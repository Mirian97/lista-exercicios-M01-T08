const dados = [{
    faixaEtaria: "A",
    salarios: [1550, 1800, 3000, 25000]
},
{
    faixaEtaria: "J",
    salarios: [6000, 8800, 5000, 2000, 9000, 24000, 800]
},
{
    faixaEtaria: "I",
    salarios: [150, 10000, 9900]
}
]

for (let item of dados) { //item 2
    if (item.faixaEtaria === "A") {
        item.faixaEtaria = "Adulto";
    } else if (item.faixaEtaria === "J") {
        item.faixaEtaria = "Jovem";
    } else if (item.faixaEtaria === "I") {
        item.faixaEtaria = "Idoso";
    }
}

for (let i = 0; i < dados.length; i++) { //item 3
    let soma = 0;
    for (let j = 0; j < dados[i].salarios.length; j++) {
        soma += dados[i].salarios[j];
    }
    const media = (soma / dados[i].salarios.length).toFixed(2);
    dados[i].mediaSalarial = media;
}

for (let i = 0; i < dados.length; i++) { //item 5
    let maior = dados[0].salarios[0];
    for (let j = 0; j < dados[i].salarios.length; j++) {
        if (dados[i].salarios[j] > maior) {
            maior = dados[i].salarios[j];
        }
    }
    dados[i].maiorSalario = maior;
}

function comparar(a, b) { //item 4
    if (a.mediaSalarial < b.mediaSalarial)
        return 1;
    if (a.mediaSalarial > b.mediaSalarial)
        return -1;
    return 0;
}

console.log(dados.sort(comparar));
