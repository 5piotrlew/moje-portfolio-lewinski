'use strict';

$(function () {
    /*zmienne*/
    var slideCount = $('.single-slide').length; 
    var slideShow = $('.slide-show'); 

    var slideWidth = 100 / slideCount; 
    var slideIndex = 0; 
    /*szerokośc kontenera wynosząca ilość slajdów*/
    slideShow.css('width', slideCount * 100 + '%'); 
    /*szerokosc i położenie każdego slajdu - marginesy*/
    $('.single-slide').each(function (index) { 
        $(this).css({ 
            'width': slideWidth + '%', 
            'margin-left': index * slideWidth + '%' 
        });
    });

    function slide(newSlideIndex) { 
        if (newSlideIndex < 0 || newSlideIndex >= slideCount) { 
            return;
        }
        var marginLeft = (newSlideIndex * (-100)) + '%'; 
        slideShow.animate({ 
            'margin-left': marginLeft
        }, 1000, function () {
            slideIndex = newSlideIndex; 
        });
    }

    carousel();
    slideIndex = 0;

    function carousel() {
        slideIndex++;
        slide(slideIndex);
        if (slideIndex >= (slideCount - 1) || slideIndex < 0) {
            slideIndex = -1;
        };
    };
    setInterval(carousel, 5000);

    /*section experience - counter*/


    $('.count-number').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 900,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });

    });
    
    /*counter - section about */
    $('.before').mouseenter(
        function () {
            $('.html').html('90');
            $('.css').html('80');
            $('.js').html('70');
            $('.jquery').html('60');
            $('.skills').addClass('bar-animation');
            $('.bar-animation').each(function () {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function (now) {
                        $(this).text(Math.ceil(now));
                    }
                });

            });
        }
    );
    $('.before').mouseleave(
        function () {
            $('.skills').removeClass('bar-animation');
            setTimeout(function () {
                $('.skills').html('0');
            }, 200);
        });
});