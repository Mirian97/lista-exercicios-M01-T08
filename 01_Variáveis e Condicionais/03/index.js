const calcularDesconto =(valorCompra, desconto)=>{
const valorComDesconto = valorCompra*((100-desconto)/100);
const valorFormatado = valorComDesconto.toFixed(2);
console.log(valorFormatado);
}

calcularDesconto(92, 5);
