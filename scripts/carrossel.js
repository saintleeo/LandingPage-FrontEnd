const slider = document.querySelectorAll(".slider");
const prev = document.getElementById("prev-button");
const next = document.getElementById("next-button");

let slideAtual = 0;


// Modificação dos slides acontece pela edicao das classes
function escondeSlide(){
    slider.forEach(item => item.classList.remove("on"));
}

function mostraSlide(){
    slider[slideAtual].classList.add("on");
}

// passa slide de acordo com a pos atual
function proximoSlider(){
    escondeSlide();
    if(slideAtual == slider.length - 1){
        slideAtual = 0;
    }
    else{
        slideAtual++;
    }

    mostraSlide();
}

function voltaSlide(){
    escondeSlide();
    if(slideAtual == 0){
        slideAtual = slider.length - 1;
    }
    else{
        slideAtual--;
    }

    mostraSlide();
}

next.addEventListener("click", proximoSlider);
prev.addEventListener("click", voltaSlide);

console.log(slider);
