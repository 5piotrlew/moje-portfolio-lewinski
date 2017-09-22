/* efekt opacity z opoznieniem zmienic na scroll cos tam */

document.body.className += " fade-out";
function usun() {    
    document.querySelector('body').classList.remove('fade-out');    
}

function hej() {
    'use strict';
    setTimeout(usun, 1);
}
window.onload = hej();


/* koniec efektu */