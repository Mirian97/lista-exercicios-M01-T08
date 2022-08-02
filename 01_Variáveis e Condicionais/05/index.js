function calcularDistancia (posicaoA, posicaoB){
    if(posicaoA>posicaoB){
    const distanciaEntreCarros = posicaoA-posicaoB;
    console.log(distanciaEntreCarros);
    } else {
    const distanciaEntreCarros = posicaoB-posicaoA;
    console.log(distanciaEntreCarros);
    }
}

calcularDistancia(9, 25);