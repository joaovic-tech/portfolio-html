var bolas = document.querySelector('.bolas');
var quant = document.querySelectorAll('.slides .images');
var atual = 0;
var imagem = document.getElementById('atual');
var rolar = true;

for(let i = 0; i < quant.length; i++){
    var div = document.createElement('div');
    div.id = i;
    bolas.appendChild(div);
}
document.getElementById('0').classList.add('img_atual');

var pos = document.querySelectorAll('.bolas div');

for(let i = 0; i < pos.length; i++){
    pos[i].addEventListener('click', ()=>{
        atual = pos[i].id
        rolar = false;
        slide()
    })
}

function slide(){
    if(atual >= quant.length){
        atual = 0
    }
    else if(atual < 0){
        atual = quant.length - 1
    }
    document.querySelector('.img_atual').classList.remove('img_atual');
    imagem.style.marginLeft = -550*atual+'px';
    document.getElementById(atual).classList.add('img_atual')
}
slide()
setInterval(()=>{
    if(rolar){
        atual++
        slide()
    }
    else{
        rolar = true;
    }
},4000)