treinos = [true, false, false, true, true];
rendimentoEsperado = 80;

function calcularRendimento(treinos, rendimentoEsperado) {
    let treinosConcluidos = 0
    for (let item of treinos) {
        if (item === true) {
            treinosConcluidos++;
        }
    }
    const indice = (treinosConcluidos / treinos.length) * 100;
    const satisfatoriedade = indice >= rendimentoEsperado ? "Rendimento satisfatório" : "Rendimento não satisfatório";
    console.log(satisfatoriedade)
}

calcularRendimento(treinos, rendimentoEsperado);