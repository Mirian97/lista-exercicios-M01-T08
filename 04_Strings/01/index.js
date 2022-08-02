const texto = " Luscas defw xqwcw   cqwcwqwq cqwPEDSE Camila  pkpoxkwqxm   RICArdo "

const texto_trim = texto.trim(); //item 1 
const texto_split = texto_trim.split(" "); //item 2
let arraySemVazios = texto_split.filter(function (i) { // item 3
    return i;
});

function procurarTexto(texto, textoProcurado) {
    const string_em_maiusculo = texto.toUpperCase()
    if (string_em_maiusculo.includes(textoProcurado)) {
        return "O texto existe na string texto"
    } else {
        return "O texto não existe!"
    }
} //item 7;
console.log(procurarTexto(texto, "CAMILA"));

let novaString = "" //item 5
for (let item of arraySemVazios) {
    if (item.length > 3) {
        novaString += item + " ";
    }
}
console.log(novaString);





let palavrasDeNossaLingua = 0;
for (let item of arraySemVazios) {
    const palavra = item.toUpperCase();
    if (palavra.includes("A") || palavra.includes("E") || palavra.includes("I") || palavra.includes("O") || palavra.includes("U")) {
        palavrasDeNossaLingua += 1;
        console.log(item);
    }
}
console.log(`Existem ${palavrasDeNossaLingua} palavras da nossa lingua`);