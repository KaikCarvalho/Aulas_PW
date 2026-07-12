const display = document.getElementById("display");

let expressao = "";

const botoes = document.querySelectorAll("[data-valor]");

botoes.forEach(botao => {

    botao.addEventListener("click", () => {

        expressao += botao.dataset.valor;
        display.textContent = expressao;

    });

});

document.getElementById("limpar").addEventListener("click", () => {

    expressao = "";
    display.textContent = "0";

});

document.getElementById("apagar").addEventListener("click", () => {

    expressao = expressao.slice(0, -1);

    if(expressao === ""){
        display.textContent = "0";
    }else{
        display.textContent = expressao;
    }

});

document.getElementById("igual").addEventListener("click", () => {

    try{

        expressao = eval(expressao).toString();

        display.textContent = expressao;

    }catch{

        display.textContent = "Erro";
        expressao = "";

    }

});