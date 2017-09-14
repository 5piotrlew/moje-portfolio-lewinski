'use strict';
$(function () {
    
    console.log('hej');
    /*zmienne*/
    var slideCount = $('.single-slide').length;
    var slideShow = $('.slide-show');

    var slideWidth = 100 / slideCount;
    var slideIndex = 0;
    /*Szerokosc kontenera*/
    slideShow.css('width', slideCount * 100 + '%');
    console.log(slideCount);


    $('.single-slide').each(function (index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        });
    });

    function slide(newSlideIndex) {
        
       if(newSlideIndex < 0 || newSlideIndex >= slideCount) {
            return;
        }
        
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
        slideShow.animate({'margin-left': marginLeft}, 800, function() {
                          slideIndex = newSlideIndex;
                          }); 
    }
    
    
//    szerokośc kontenera wynosząca ilość slajdów
    
    slideShow.css('width', slideCount * 100 + '%');
    
    
//    szerokosc i położenie każdego slajdu (marginesy)
    
    $('.single-slide').each(function(index) {
        $(this).css({'width': slideWidth + '%', 'margin-left': index * slideWidth + '%'});
    });
    
    
//    uruchomienie funkcji po kliknięciu na strzałkę
    
   /* $('.prev-slide').click(function(){
        slide(slideIndex - 1);
    });
    
    */
    
    $(function chuj(){
        slide(slideIndex + 1);
        setTimeout(chuj, 5000);
    });
    
    

    
});