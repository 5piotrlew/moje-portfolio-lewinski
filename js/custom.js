'use strict';
/* efekt opacity z opoznieniem zmienic na scroll cos tam */

/*document.body.className += " fade-out";

window.onload = setTimeout(function () {
    document.querySelector('body').classList.remove('fade-out');
}, 1) ;*/


/* koniec efektu */

/* typing effect - start */

var g = 0;
/*
var firstTxt = 'Doświadczenie w programowaniu w językach HTML/CSS/JavaScript zdobywałem podczas kursu Frond End Developer oraz w pracy projektowej. Posługuję się technologiami SASS i GULP, korzystam z repozytorium GIT, implementuję proste rozwiązania bazodanowe.';
var secondTxt = 'Mam doświadczenie w pracy z JQuery i Bootstrapem, potrafię debugować. Analizuję i optymalizuję tworzony kod.';
var thirdTxt = 'Jestem obeznany z serwisami: jira, confluence, guacamole, zimbra,. Mam duże doświadczenie w rozwiązywaniu problemów technologii informatycznej. Bardzo szybko się uczę nowych technologii, dlatego chętnie podejmę nowe wyzwania.';

console.log(secondTxt.length);
console.log(g);
console.log(firstTxt.charAt(g));
*/


var rowOne = document.getElementById("row-nr-1").textContent;

var rowOneZ = document.getElementById("row-nr-1");
rowOneZ.innerHTML = " ";
var rowTwo = document.getElementById("row-nr-2").textContent;

var rowTwoZ = document.getElementById("row-nr-2");
rowTwoZ.innerHTML = " ";
var rowThree = document.getElementById("row-nr-3").textContent;

var rowThreeZ = document.getElementById("row-nr-3");
rowThreeZ.innerHTML = " ";

console.log(rowThree);
/*function typeWriter() {

     if (d < rowOne.length) {
         rowOneZ.innerHTML += rowOne.charAt(d); 
         d++;
         setTimeout(typeWriter, 50);
     }
     
     if (d >= rowOne.length && b < rowTwo.length) {
     rowTwoZ.innerHTML += rowTwo.charAt(b);
     }
     
     if (b >= rowTwo.length && c < rowThree.length) {
     rowThreeZ.innerHTML += rowThree.charAt(c);
     }

    for (var d = 0; d < rowOne.length; d++) {       
        document.getElementById("row-nr-1").innerHTML += rowOne.charAt(d);
    }
    for (var b = 0; b < rowTwo.length; b++) {
        
            document.getElementById("row-nr-2").innerHTML += rowTwo.charAt(b);
        
    }
    for (var c = 0; c < rowThree.length; c++) {
        
            document.getElementById("row-nr-3").innerHTML += rowThree.charAt(c);
        
    }
};*/

/*function timer(zmienna, tekst, licznik) {
    setTimeout(function () { //The timer
        zmienna.innerHTML += tekst.charAt(licznik);
    }, licznik * 50); //needs the "start*" or else all the timers will run at 3000ms
}
var d = 1;
for (d; d < rowOne.length; d++) {
    timer(rowOneZ, rowOne, d);
    console.log(d);
   
}

if (d >= 246) {
for (var b = 1; b < rowTwo.length; b++) {
    d++;
    timer(rowTwoZ, rowTwo, d);
    console.log(d);
    }}*/

/*for (var c = 1; c < rowThree.length; c++) {
    timer(rowThreeZ, rowThree, c);
}*/
var d=1;
var b=1;
var c=1;
function typeWriter() {

    if (d < rowOne.length) {
        rowOneZ.innerHTML += rowOne.charAt(d);
        d++;
        setTimeout(typeWriter, 50);
    }

    if (d >= rowOne.length && b < rowTwo.length) {
        rowTwoZ.innerHTML += rowTwo.charAt(b);
        b++;
        setTimeout(typeWriter, 50);
    }

    if (b >= rowTwo.length && c < rowThree.length) {
        rowThreeZ.innerHTML += rowThree.charAt(c);
        c++;
        setTimeout(typeWriter, 50);
    }
};

typeWriter();


/* typing effect - stop */