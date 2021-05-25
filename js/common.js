//panel
$(document).ready(function(){

    var btn = '.panel_icon';
    var panel = '.panel';
    var bg = '.panel_bg';
    var main ='.main_nav';
    var sub = '.sub_nav';
    
    //2. btn 클릭이벤트 - 패널이동, bg 보이기, 화면 스크롤바 제거
    $(btn).click(function(e){
        e.preventDefault(); //기본 이벤트 제거 - 임시링크 때문에 위로 올라가지 않도록 처리 
        $(panel).addClass('active');
        $(bg).stop().fadeIn(100);
        $('html, body').addClass('active');
    });
    
    //3. bg 클릭이벤트 - 패널이동, bg 안보이기, 화면스크롤바 생성
    $(bg).click(function(){
        $(panel).removeClass('active');
        $(this).stop().delay(500).fadeOut(100, function(){
            //bg가 전부 사라지고 나서 일어날 일을 작성
            $(main).removeClass('active');
            $(sub).slideUp(0);
        }); 
        $('html, body').removeClass('active');
    });
    
    //4. 메인메뉴 클릭 시 해당 하위메뉴 보이게 처리 (+활성화)
    $(main).click(function(e){
        e.preventDefault(); //기본이벤트 제거 
        
        //hasClass() : 매개변수의 클래스를 갖고 있으면 true반환, 그렇지 않으면 false 반환
        var has = $(this).hasClass('active');
        
        if(has){ //active 클래스를 갖고 있으면
            $(this).removeClass('active'); //제거
            $(this).next().stop().slideUp('fast');
        }else{
            $(main).removeClass('active'); //모든 메인메뉴의 클래스는 제거 후
            $(this).addClass('active'); //해당 메인메뉴만 클래스 추가
            $(sub).stop().slideUp('fast'); //모든 서브메뉴는 슬라이드업
            $(this).next().stop().slideDown('fast'); //해당 하위메뉴만 슬라이드다운
        }
    });
    
}); //준비구문 종료



//scrollTop
$(document).ready(function(){
    var btn = '.topBtn a';
    var speed = 1200; 
    var easing = 'easeOutQuart'; 
    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        
        if(top > 200){
            $(btn).parent().fadeIn(600);
        }else{
            $(btn).parent().fadeOut(600);
        }
    });
    
    $(btn).click(function(e){
        e.preventDefault(); 
    
        $('html, body').animate({
            scrollTop: 0 
        },speed,easing);
    });
});