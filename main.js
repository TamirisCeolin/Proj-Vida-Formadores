const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

//Laço de repetição

for(let i = 0; i < botoes.length; i++){
    botoes[i].onclick = function(){
        for(let j = 0; j < botoes.length; j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}

// document.querySelector("#minhaDiv p").textContent = "vai embora calor";

const contadores = document.querySelectorAll(".contador");
let tempoAtual = new Date(); //Retorna a data atual do computador
const tempoObjetivo1 = new Date("2024-05-02T00:00:00");

//transformação do tempo de milessegundos para "números redondos"
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = Math.floor(tempoFinal / 1000); //O Math.floor permite que os números sejam arredondados após as divisões
let minutos = Math.floor (segundos / 60);     // o sinal % nos retorna o resto da divisão
let horas = Math.floor (minutos / 60);
let dias = Math.floor(horas / 24);

segundos %= 60; //para saber qual é o resto da divisão
minutos %= 60;  
horas %= 24;

//para fazer a exibição do tempo usando "concatenação" (coloca as coisas juntas usando o sinal de +)
contadores[0].textContent = dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ";
 

