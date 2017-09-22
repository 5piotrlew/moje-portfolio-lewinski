'use strict';
/* efekt opacity z opoznieniem zmienic na scroll cos tam */

/*document.body.className += " fade-out";

window.onload = setTimeout(function () {
    document.querySelector('body').classList.remove('fade-out');
}, 1) ;*/


/* koniec efektu */

/* typing effect - start */

var g = 0;
var firstTxt = 'Doświadczenie w programowaniu w językach HTML/CSS/JavaScript zdobywałem podczas kursu Frond End Developer oraz w pracy projektowej. Posługuję się technologiami SASS i GULP, korzystam z repozytorium GIT, implementuję proste rozwiązania bazodanowe.';
var secondTxt = 'Mam doświadczenie w pracy z JQuery i Bootstrapem, potrafię debugować. Analizuję i optymalizuję tworzony kod.';
var thirdTxt = 'Jestem obeznany z serwisami: jira, confluence, guacamole, zimbra,. Mam duże doświadczenie w rozwiązywaniu problemów technologii informatycznej. Bardzo szybko się uczę nowych technologii, dlatego chętnie podejmę nowe wyzwania.';

console.log(secondTxt.length);
console.log(g);
console.log(firstTxt.charAt(g));




function typeWriter() {
    if (g < firstTxt.length) {
        document.getElementById("row-nr-1").innerHTML += firstTxt.charAt(g);        
        g++;
        setTimeout(typeWriter, 50);
    }
    
}

window.onload = typeWriter();


/* typing effect - stop */