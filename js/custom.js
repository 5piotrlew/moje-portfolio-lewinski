'use strict';
/* efekt opacity z opoznieniem zmienic na scroll cos tam */

document.body.className += " fade-out";

setTimeout(function () {
    document.querySelector('body').classList.remove('fade-out');
}, 1) ;


/* koniec efektu */

/* typing effect - start */

var rowOne = document.getElementById("row-nr-1").textContent;
var rowOneZ = document.getElementById("row-nr-1");
rowOneZ.innerHTML = " ";

var rowTwo = document.getElementById("row-nr-2").textContent;
var rowTwoZ = document.getElementById("row-nr-2");
rowTwoZ.innerHTML = " ";

var rowThree = document.getElementById("row-nr-3").textContent;
var rowThreeZ = document.getElementById("row-nr-3");
rowThreeZ.innerHTML = " ";

var a=1;
var b=1;
var c=1;
function typeWriter() {

    if (a < rowOne.length) {
        rowOneZ.innerHTML += rowOne.charAt(a);
        a++;
        setTimeout(typeWriter, 50);
    }

    if (a >= rowOne.length && b < rowTwo.length) {
        rowTwoZ.innerHTML += rowTwo.charAt(b);
        b++;
        setTimeout(typeWriter, 100);
    }

    if (b >= rowTwo.length && c < rowThree.length) {
        rowThreeZ.innerHTML += rowThree.charAt(c);
        c++;
        setTimeout(typeWriter, 150);
    }
};

typeWriter();


/* typing effect - stop */