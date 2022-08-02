const telhas_por_caminhao = 700;
const telhas_a_serem_carregadas = 5000;

let viagens = Math.floor(telhas_a_serem_carregadas/telhas_por_caminhao);

if(telhas_a_serem_carregadas%telhas_por_caminhao!=0){
viagens+=1;
console.log(viagens);
}

