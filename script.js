let ligar = document.getElementById('ligar');
let apagar = document.getElementById('apagar');
let lampada = document.getElementById('imagem');
let fundo = document.getElementById('caixa');
let background = document.body;
let trocar = document.getElementById('trocarluz');
let somvidro = new Audio('./audio/quebrando.flac');
let somtroca = new Audio('./audio/troca.wav');
let sombotao = new Audio('./audio/click.mp3');
let titulo = document.getElementById('titulo')

//alert('Toque na lâmpada')

function NaoQuebrada() {
    return lampada.src.indexOf ('ligada') > -1 || lampada.src.indexOf ('apagada') > -1
}


function EstaQuebrada() {
    return lampada.src.indexOf ('quebrada') > -1
}

function ligada() {
    if (!EstaQuebrada ()) {
    lampada.setAttribute('src', 'img/ligada.jpg')
    fundo.style.backgroundColor = 'white'
    ligar.style.backgroundColor = 'yellow'
    apagar.style.backgroundColor = ''
    background.style.backgroundColor = 'white'

    } 
}

function trocando() {
    if (!NaoQuebrada()) {
    sombotao.play();   
    somtroca.play();
    lampada.setAttribute('src', 'img/apagada.png')
    trocar.style.backgroundColor = ''
    titulo.innerHTML = ''
    }
    
}

function svidro() {
    somvidro.play();
}
function sbotao() {
    sombotao.play();
}

function apagada() {
    if (!EstaQuebrada()) {
    lampada.setAttribute('src', 'img/apagada.png')
    ligar.style.backgroundColor = ''
    background.style.backgroundColor = 'black'
    fundo.style.backgroundColor = 'black'

    //apagar.style.backgroundColor = ''
    
    }
}

function quebrada() {
    titulo.innerHTML = 'Fiquei no escuro :('
    lampada.setAttribute('src', 'img/quebrada4.png')
    fundo.style.backgroundColor = 'black'
    background.style.backgroundColor = 'black'
    ligar.style.backgroundColor = ''
    trocar.style.backgroundColor = 'yellow'
    
}

//lampada.addEventListener('mouseenter', ligada );
//lampada.addEventListener('mouseleave', apagada);
lampada.addEventListener('click', quebrada);
lampada.addEventListener('click', svidro);
ligar.addEventListener('click', sbotao);
apagar.addEventListener('click', sbotao);



