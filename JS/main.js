let ico__menu = document.querySelector('#ico__menu');
let icox__menu = document.querySelector("#ico__menux")
let menu__mobil = document.querySelector("#menu__mobil");
let  btn__ocultar__redes = document.querySelector('#btn__redes');
let cont__Redes = document.querySelector('#float__redes');

// eventos
ico__menu.addEventListener('click', abrirMenu);
icox__menu.addEventListener('click', cerrarMenu);

// funciones

function  abrirMenu(){
menu__mobil.classList.remove('ocultar-menu');
menu__mobil.classList.add('mostrar-menu');
ico__menu.classList.add('cont-ico-menu-ani')
icox__menu.classList.remove('cont-ico-menu-ani')
setTimeout(() => {
    ico__menu.style.display="none";
    icox__menu.style.display="block";
}, 800);

}

function cerrarMenu(){
menu__mobil.classList.remove('mostrar-menu');
menu__mobil.classList.add('ocultar-menu');
icox__menu.classList.add('cont-ico-menu-ani');
ico__menu.classList.remove('cont-ico-menu-ani')

setTimeout(() => {
    ico__menu.style.display="block";
    icox__menu.style.display="none";
}, 800);
}


btn__ocultar__redes.addEventListener('click', ocultarRedes);


function ocultarRedes(){
cont__Redes.classList.toggle('ocultar__redes');
btn__ocultar__redes.classList.toggle('btn__redes__animar')

}
