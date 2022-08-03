dados = [
    ["A", 1550, 1800, 3000, 25000],
    ["J", 6000, 8800, 5000, 2000, 9000, 24000, 800],
    ["I", 150, 10000, 9900]
]

function analisarDados(array) {
    let somaAdulto = 0;
    let adultoLength = 0;
    let somaJovem = 0;
    let jovemLength = 0;
    let somaIdoso = 0;
    let idosoLength = 0;
    for (let i = 0; i < array.length; i++) {
        if (i[0] === "A") {
            adultoLength = dados[i].salarios.length
            for (let j = 1; j < array[i].length; j++);
            somaAdulto += dados[i].salarios[j]
        } else if (i[0] === "J") {
            jovemLength = dados[i].salarios.length
            for (let j = 1; j < array[i].length; j++);
            somaJovem += dados[i].salarios[j]
        } else if (i[0] === "I") {
            idosoLength = dados[i].salarios.length
            somaIdoso += dados[i].salarios[j]
        }
    }
    const mediaAdulto = somaAdulto / adultoLength;
    const mediaJovem = somaJovem / jovemLength;
    const mediaIdoso = somaIdoso / idosoLength;
    if (mediaAdulto > mediaJovem && mediaAdulto > mediaIdoso) {
        console.log("A maior média salarial é a do adulto.");
    } else if (mediaJovem > mediaAdulto && mediaJovem > mediaIdoso) {
        console.log("A maior média salarial é a do jovem.");
    } else {
        console.log("A maior média salarial é a do idoso.");
    }
}

analisarDados(dados);