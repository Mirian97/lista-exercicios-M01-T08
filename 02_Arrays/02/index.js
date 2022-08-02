const calcularNota = (marcadas, gabarito) => {
    let acertos = 0;
    let erros = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (marcadas[i] === gabarito[i]) {
            acertos++
        } else {
            erros++
        }
    }
    console.log(acertos - erros);
}
const marcadas = ["C", "B", "C", "C", "D", "C"];
const gabarito = ["C", "C", "C", "C", "C", "C"];

calcularNota(marcadas, gabarito);

