'use strict';

$(function () {
    
    
    /*$("a[href*='#']").click(function () {
        $('body').animate({
            scrollTop: $(this.hash).offset().top - 50
        }, 500);
    });*/
    
    
    //Scroll to
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));

    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
  });
    
    
    
    
    
    
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
            $('.js').html('67');
            $('.jquery').html('65');
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
}

typeWriter();
    
    /* jQuery(function ($) {

// start all the timers
$('.timer').each(count);

// restart a timer when a button is clicked
$( window ).scroll(function () {console.log($(window).scrollTop());
if($(window).scrollTop() > 300 && $(window).scrollTop() < 850)
{
$('.timer').each(count);
}
});

function count(options) {
var $this = $(this);
options = $.extend({}, options || {}, $this.data('countToOptions') || {});
$this.countTo(options);
}
}); "*/
    

    
    
});