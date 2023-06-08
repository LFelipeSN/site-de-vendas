const verDetalhes = window.document.querySelectorAll(".mais p");
const logo = window.document.querySelector('#logo');
const opRoupa = window.document.querySelector("#opRoupas")
const caixaDePesquisa = window.document.querySelector('header input');
const botaoDePesquisa = window.document.querySelector('.botao_pesquisa');
const carrosel = window.document.querySelector(".carrosel")

logo.addEventListener('click', url_Index);
opRoupa.addEventListener('click', url_Index);

for(let i=0; i < verDetalhes.length; i++){
    verDetalhes[i].addEventListener('click', function(){
        window.location.href="view/view_roupa.html";
    })
}

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
    window.location.href="index.html";
}

function url_view_roupa(){
    window.location.href="view/pesquisa_roupa.html";
}

const swiper = new Swiper(".swiper", {
    centeredSlides: true,
    spaceBetween: 10,
    slidesPerView: 3,
    loop: true,
    speed: 500,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    autoplay: {
        delay: 5000
    },
   
})
