var btnSomar= document.querySelector('#somar')

/*btnSomar.addEventListener('click',soma)

function soma(){
    var num1 = document.querySelector('#num1').value
    var num2 = document.querySelector('#num2').value
    var somar = parseInt(num1) + parseInt(num2)
    alert(somar)

}*/

btnSomar.onclick = function(){
    var num1 = document.querySelector('#num1').value
    var num2 = document.querySelector('#num2').value
    var somar = parseInt(num1) + parseInt(num2)
    alert(somar)
}

//atv2
var btnVermelho = document.querySelector('#vermelho')
var btnVerde = document.querySelector('#verde')
var btnAzul = document.querySelector('#azul')
var btnAmarelo = document.querySelector('#amarelo')

var corpo = document.querySelector('#corpo')


btnVermelho.onclick = function(){
    corpo.style.background = 'red'
}

btnVerde.onclick = function(){
    document.body.style.background = 'green'
}

btnAzul.onclick = function(){
    document.body.style.background = 'blue'
}

btnAmarelo.onclick = function(){
    document.body.style.background = 'yellow'
}

//atv 3
var aVermelho = document.querySelector('#ver')
var aVerde = document.querySelector('#ve')
var aAzul = document.querySelector('#az')
var aAmarelo = document.querySelector('#ama')

aVermelho.onmouseover = function(){
    document.body.style.background = 'red'
}

aVerde.onmouseover = function(){
    document.body.style.background = 'green'
}

aAzul.onmouseover = function(){
    document.body.style.background = 'blue'
}

aAmarelo.onmouseover = function(){
    document.body.style.background = 'yellow'
}
//atv 4

var cores = document.querySelector('#select')

cores.addEventListener('change', mudarcor)

function mudarcor(){
    var cor=cores.value

switch(cor)
{
    case "vermelh":
        document.body.style.background = 'red'
        break;
    case "verd":
        document.body.style.background = 'green'
        break;
    case "azu":
        document.body.style.background = 'blue'
        break;
    case "amarel":
        document.body.style.background = 'yellow'
        break;
}
}

//atv 5
var btnOcultar = document.querySelector('#ocultar')
var btnMostrar = document.querySelector('#mostrar')

btnOcultar.onclick = function(){
    document.querySelector('#texto').style.visibility = "hidden"
}

btnMostrar.onclick = function(){
    document.querySelector('#texto').style.visibility = "visible"
}

