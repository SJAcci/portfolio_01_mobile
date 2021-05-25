
//main
$(document).ready(function(){
    var swiper = new Swiper('main .swiper-container', {
        navigation: {
        nextEl: 'main .swiper-button-next',
        prevEl: 'main .swiper-button-prev',
        },
        loop: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });
});

//menu
$(document).ready(function(){
    var btn = '.menu .tab-box .btn'; 
    var content = '.menu .conwrap'; 

    $(btn).find('li:first a').addClass('active');
    $(content).find('> div:first').fadeIn(0);

    var swiper1 = new Swiper('.menu .icecream', {
        slidesPerView: 1.5,
        spaceBetween: 20,
        loop: true,
    });
    var swiper2 = '';

    $(btn).find('a').click(function(e){
        e.preventDefault(); 
        
        $(btn).find('a').removeClass('active'); 
        $(this).addClass('active'); 

        var index = $(this).parent().index();

        $(content).find('> div').fadeOut(0);
        $(content).find('> div').eq(index).fadeIn(0);

        swiper1 = '';
        swiper2 = '';

        if(index + 1 == 1){
            swiper1 = new Swiper('.menu .icecream', {
                slidesPerView: 1.5,
                spaceBetween: 20,
                loop: true,
            });
        }else if(index + 1 == 2){
            swiper2 = new Swiper('.menu .bakery', {
                slidesPerView: 1.5,
                spaceBetween: 20,
                loop: true,
            });
        }
    });
});

//store
$(document).ready(function(){
    var btn = '.store .tab-box .btn'; 
    var content = '.store .conwrap'; 

    $(btn).find('li:first a').addClass('active');
    $(content).find('> div:first').fadeIn(0);

    $(btn).find('a').click(function(e){
        e.preventDefault(); 

        $(btn).find('a').removeClass('active'); 
        $(this).addClass('active'); 

        var index = $(this).parent().index();
        
        $(content).find('div').fadeOut(0); 
        $(content).find('div').eq(index).fadeIn(0);
    });
});

//banner02
$(document).ready(function(){
    var swiper = new Swiper('.banner02 .swiper-container', {
        pagination: {
            el: '.banner02 .swiper-pagination'
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});

//board
$(document).ready(function(){
    var list = '.board ul'; 
    var time = 3000;
    var speed = 'fast'; 
    var h = $(list).find('li').outerHeight(); 
    
    $(list).find('li:first a').attr('tabindex','0');

    var topMove = function(){
        $(list).stop().animate({
            top: '-=' + h
        },speed,function(){
            $(list).find('li').first().appendTo(list);
            
            $(list).css('top',0);
            
            $(list).find('li a').attr('tabindex','-1'); 
            $(list).find('li:first a').attr('tabindex','0'); 
        });
    }
    
    var listMove = setInterval(topMove,time);
    
    $(list).find('li a').on('mouseenter focus',function(){
        clearInterval(listMove);
    });

    $(list).find('li a').on('mouseleave blur',function(){
        listMove = setInterval(topMove,time);
    });
});

//video
$(document).ready(function(){
    var galleryThumbs = new Swiper('.video .gallery-thumbs', {
        spaceBetween: 20,
        slidesPerView: 2.5,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        loop: true,
      });
      var galleryTop = new Swiper('.video .gallery-top', {
        spaceBetween: 10,
        thumbs: {
          swiper: galleryThumbs
        }
      });
});






