function calcularNumArray(lista, propriedade) {
    let soma = 0;
    let qtdDeTres = 0;
    let qtdDeNumDe6a10 = 0;
    let maior = lista[0];
    let menor = lista[0];

    for (let item of lista) {

        if (propriedade === 1) {
            soma += item;

        } else if (propriedade === 2) {
            if (item === 3) {
                qtdDeTres += 1;
            }

        } else if (propriedade === 3) {
            if (item > 6 && item < 10) {
                qtdDeNumDe6a10 += 1;
            }

        } else if (propriedade === 4) {
            if (item > maior) {
                maior = item;
            }

        } else if (propriedade === 5) {
            if (item < menor) {
                menor = item;
            }
        }

    } if (propriedade === 6) {
        console.log(lista.length);
    }
    console.log(soma);
    console.log(qtdDeTres);
    console.log(qtdDeNumDe6a10);
    console.log(maior);
    console.log(menor);
}


const array = [9, 7, 8, 6.5, 6.2, 13, 3, 3, 3, 3];

calcularNumArray(array, 6);