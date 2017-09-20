'use strict';
$(function () {
    /*zmienne*/
    var slideCount = $('.single-slide').length; //10
    var slideShow = $('.slide-show'); //ogolny kontener dla obrazkow

    var slideWidth = 100 / slideCount; //sto podzielic na dziesiec to dziesiec
    var slideIndex = 0; //pierwszy obrazek zerowy indeks
    /*Szerokosc kontenera*/
    slideShow.css('width', slideCount * 100 + '%'); //odnosimy sie do kontenera obrazkow, jego zserokosc to wszystkie obrazki razy sto procent
    console.log(slideCount);
    $('.single-slide').each(function (index) { //przelatujemy po wszystkich obrazkach
        $(this).css({ //ustawiamy szerokosc i wychodzi tak ze jeden obrazek ma sto procent swojej szerokosci bo ma jedna dziesiata calego kontenera slide-show
            'width': slideWidth + '%', //zawsze dziesiec procent calosci
            'margin-left': index * slideWidth + '%' //zmiana zeby sie przesuwaly, kontener jest tak szeroki ze go nie widac calego tylko jakas czesc
        });
    });

    function slide(newSlideIndex) { //funkcja o nazwie slide z parametrem ktory czeka na jakas wartosc
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) { //wartosc parametru mniejsza od zera LUB wieksza czy równa to koniec funkcji
            return;
        }
        var marginLeft = (newSlideIndex * (-100)) + '%'; //zmienna tylko dla funkcji PARAMETR numer obrazka razy minus sto procent
        slideShow.animate({ //odnosimy sie do ogolnego kontenera i nadajemy plynnosc
            'margin-left': marginLeft
        }, 1000, function () {
            slideIndex = newSlideIndex; //aktualizacja numeru indeksa
        });
    }

    //    szerokośc kontenera wynosząca ilość slajdów

   /* slideShow.css('width', slideCount * 100 + '%');

    //    szerokosc i położenie każdego slajdu (marginesy)

    $('.single-slide').each(function (index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        });
    }); */
    
    carousel();
    slideIndex = 0;
    function carousel() {
        
        slideIndex++;
        slide(slideIndex);
        if (slideIndex > slideCount) {
            slideIndex = -1;
        };
    };
    setInterval(carousel, 5000);

});