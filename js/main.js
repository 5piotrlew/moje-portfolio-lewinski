'use strict';

$(function () {
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
    

    /* slider - start */
    /*variables*/
    var slideCount = $('.single-slide').length; 
    var slideShow = $('.slide-show'); 

    var slideWidth = 100 / slideCount; 
    var slideIndex = 0; 
    /*width div equal to slides length*/
    slideShow.css('width', slideCount * 100 + '%'); 
    /*width and position of each slide - margins*/
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

    
    slideIndex = 0;
    function carousel() {
        slideIndex++;
        slide(slideIndex);
        if (slideIndex >= (slideCount - 1) || slideIndex < 0) {
            slideIndex = -1;
        };
    };
    //setInterval(carousel, 5000);
    
    //
    
    $(function () {
        var timerId = setInterval(carousel, 5000);

        $('.slide-show').mouseenter(function () {
            clearInterval(timerId);
        });

        $('.slide-show').mouseleave(function () {
            timerId = setInterval(carousel, 5000);
        });
    });
    //


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


/* typing effect - start - section about */

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
    
 /* buttons - on click show/hide projects and courses */
    var projekty = 1;
    $('#my-projects').hide("slow");  
    $('.count-title-button').click(function(){      
        projekty++;
        if (projekty % 2 == 0) {
            $('#my-projects').show("slow");
            $('.count-title-button').text('Ukryj').css({'color':'#eee'});            
        } else {
            $('#my-projects').hide("slow");            
            $('.count-title-button').text('Zobacz').css({'color':'#eee'});             
        }         
            
    });
        
});