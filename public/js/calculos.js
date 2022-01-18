var inp = document.getElementById('inp');
var btn_0 = document.getElementById('btn_0');
var btn_1 = document.getElementById('btn_1');
var btn_2 = document.getElementById('btn_2');
var btn_3 = document.getElementById('btn_3');
var btn_4 = document.getElementById('btn_4');
var btn_5 = document.getElementById('btn_5');
var btn_6 = document.getElementById('btn_6');
var btn_7 = document.getElementById('btn_7');
var btn_8 = document.getElementById('btn_8');
var btn_9 = document.getElementById('btn_9');
var btn_limpar = document.getElementById('btn_limpar');
var btn_div = document.getElementById('btn_div');
var btn_mult = document.getElementById('btn_mult');
var btn_menos = document.getElementById('btn_menos');
var btn_mais = document.getElementById('btn_mais');
var btn_ponto = document.getElementById('btn_ponto');
var btn_virgula = document.getElementById('btn_virgula');
var btn_icon = document.querySelector('.btn_icon');
var igual = document.querySelector('.igual');

// butões dos numeros
btn_0.addEventListener('click', function(){
    inp.value += '0';
});
btn_1.addEventListener('click', function(){
    inp.value += '1';
});
btn_2.addEventListener('click', function(){
    inp.value += '2';
});
btn_3.addEventListener('click', function(){
    inp.value += '3';
});
btn_4.addEventListener('click', function(){
    inp.value += '4';
});
btn_5.addEventListener('click', function(){
    inp.value += '5';
});
btn_6.addEventListener('click', function(){
    inp.value += '6';
});
btn_7.addEventListener('click', function(){
    inp.value += '7';
});
btn_8.addEventListener('click', function(){
    inp.value += '8';
});
btn_9.addEventListener('click', function(){
    inp.value += '9';
});
btn_limpar.addEventListener('click', function(){
    inp.value = '';
});
btn_div.addEventListener('click', function(){
    inp.value += '/';
});
btn_mult.addEventListener('click', function(){
    inp.value += '*';
});
btn_menos.addEventListener('click', function(){
    inp.value += '-';
});
btn_mais.addEventListener('click', function(){
    inp.value += '+';
});
btn_ponto.addEventListener('click', function(){
    inp.value += '.';
});
btn_virgula.addEventListener('click', function(){
    inp.value += ',';
});
btn_icon.addEventListener('click', function(){
    inp.value = inp.value.substr(0, inp.value.length -1);
});
igual.addEventListener('click', function(){    

    var calculo = eval(inp.value);

    if(!isNaN(calculo)){
        inp.value = calculo;
    }
    else if(isNaN(calculo)){
        alert('Expressão');
    }
    
});
