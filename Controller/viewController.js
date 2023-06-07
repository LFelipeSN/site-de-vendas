const logo = window.document.querySelector('#logo');
const opRoupa = window.document.querySelector("#opRoupas")
const caixaDePesquisa = window.document.querySelector('header input');
const botaoDePesquisa = window.document.querySelector('.botao_pesquisa');

logo.addEventListener('click', url_Index);
opRoupa.addEventListener('click', url_Index);

caixaDePesquisa.addEventListener('keypress', function(pressed){
    if(pressed.key == "Enter"){
        url_view_roupa();
    }
})

botaoDePesquisa.addEventListener('click', function(){
    if(caixaDePesquisa.value.trim() == ""){
        window.alert("Digite algo");
        return

    }else{
        url_view_roupa();
    }
    
})

function url_Index(){
    window.location.href="../index.html";
}

function url_view_roupa(){
    window.location.href="pesquisa_roupa.html";
}


/////////////////////////////////

// body.style.cursor="wait";
// window.location.href = "http://pt.stackoverflow.com";//acessa a pagina anterior clicando em voltar
// window.location.replace("http://pt.stackoverflow.com");// nn acessa a pagina anterior clicando em voltar
// window.open("http://pt.stackoverflow.com");//abre em outra aba