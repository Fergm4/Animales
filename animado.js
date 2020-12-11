let animado = document.querySelectorAll(".animado");

function mostarScroll(){
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++){
        let alturaAnimado = animado[i].offsetTop;
        if (alturaAnimado - 325 < scrollTop){
            animado[i].style.opacity = 1;
            animado[i].classList.add("mostrarTop");
        }
    }
}

window.addEventListener('scroll', mostarScroll);