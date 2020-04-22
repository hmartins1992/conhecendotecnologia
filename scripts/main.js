var minhaimagem = document.querySelector('img');

minhaimagem.onclick = function(){
    var mySrc = minhaimagem.getAttribute('src');
    if (mySrc === 'imagens/tecnologia.png'){
        minhaimagem.setAttribute ('src', 'imagens/tecnologia2.png');
    } else {
        minhaimagem.setAttribute ('src','imagens/tecnologia.png');
    }
}

var mybutton = document.querySelector('button');
var myheading = document.querySelector('h1');

function setUserName (){
    var myname = prompt('Por favor, digite seu nome.');
    localStorage.setItem('name', 'myname');
    myheading.textContent = 'Tecnologia é legal', + 'myname';
    if(!localStorage.getItem('name')){
        setUserName();
    }else {
        var storedname = localStorage.getItem('name');
        myheading.textContent = 'Tecnologia é legal', + storedname;
    }

}

mybutton.onclick = function(){
    setUserName();
}