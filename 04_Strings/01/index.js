const texto = " Luscas defw xqwcw   cqwcwqwq cqwPEDSE Camila  pkpoxkwqxm   RICArdo "

function procurarTexto(texto, textoProcurado) {
    const string_em_maiusculo = texto.toUpperCase()
    if (string_em_maiusculo.includes(textoProcurado)) {
        return "O texto existe na string texto"
    } else {
        return "O texto não existe!"
    }
}

console.log(procurarTexto(texto, "CAMILA"));

