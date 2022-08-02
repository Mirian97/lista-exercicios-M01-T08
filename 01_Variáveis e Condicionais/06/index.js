function ano_de_copa (ano){
    const resto = ano%4;
    if(resto===2){
        console.log("Este ano é o Ano de Copa do Mundo");
    } else{
        console.log("Que pena! Este não é ano de copa")
    }
}
ano_de_copa(2014);