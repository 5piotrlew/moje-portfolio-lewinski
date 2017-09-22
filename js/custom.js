'use strict';
/* efekt opacity z opoznieniem zmienic na scroll cos tam */

document.body.className += " fade-out";

window.onload = setTimeout(function () {
    document.querySelector('body').classList.remove('fade-out');
}, 1);
;


/* koniec efektu */