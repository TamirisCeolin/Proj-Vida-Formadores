const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");

//Laço de repetição

for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
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
const tempoObjetivo1 = new Date("2024-05-10T00:00:00");
const tempoObjetivo2 = new Date("2024-07-07T00:00:00");
const tempoObjetivo3 = new Date("2024-12-31T00:00:00");
const tempoObjetivo4 = new Date("2024-12-13T00:00:00");
const tempos = [tempoObjetivo1, tempoObjetivo2, tempoObjetivo3, tempoObjetivo4];


function calculaTempo(tempoObjetivo) {
    let tempoFinal = tempoObjetivo - tempoAtual;
                                                //transformação do tempo de milessegundos para "números redondos"
    let segundos = Math.floor(tempoFinal / 1000); //O Math.floor permite que os números sejam arredondados após as divisões
    let minutos = Math.floor(segundos / 60);     // o sinal % nos retorna o resto da divisão
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    segundos %= 60; //para saber qual é o resto da divisão
    minutos %= 60;
    horas %= 24;

    //Para mostrar as informações na tela
    return (dias + " dias " + horas + " horas " + minutos + " minutos " + segundos + " segundos ");
}

for (let i = 0; i < contadores.length; i++) {
    contadores[i].textContent = calculaTempo(tempos[i]);
}
