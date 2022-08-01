function calculadora(num1, num2, operacao) {

    if (operacao === 1) {
        const soma = num1 + num2;
        console.log(soma);
    } else if (operacao === 2) {
        const subtracao = num1-num2;
        console.log(subtracao);
    } else if(operacao===3){
        const multiplicacao = num1*num2;
        console.log(multiplicacao);
    } else if (operacao===4){
        const divisao = num1/num2;
        console.log(divisao);
    } else if(operacao===5){
        const resto = num1%num2;
        console.log(resto);
    }
}

calculadora(10,2,5);