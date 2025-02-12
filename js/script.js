//모바일에서의 100vh 크기 잡기
function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
setScreenSize();

//스크롤 시, header 변경 사항
$(window).scroll(function(){ 
    var scroll = $(window).scrollTop(); 
    if (scroll > 1) { 
        $('#wrap').addClass('scroll');
    } 
    else if (scroll == 0) { 
        $('#wrap').removeClass('scroll');
    } 
}); 

//데스크탑 시, 헤더 메뉴에 hover 할 때 백그라운드 색상 변함
$('.dt_menu').hover(function() {
    $('header').addClass('hover');
    }, function(){
    $('header').removeClass('hover');
});
$(function(){
    $('.open_menu-btn').click(function(){
        $('body').addClass('hidden');
        $('.mo_menu').addClass('active');
        $('.mo_menu').show();
    });
    $('.close_menu-btn').click(function(){
        $('body').removeClass('hidden');
        $('.mo_menu').hide();
        $('.mo_menu').removeClass('active');
    })
});

//맨 위로
$('.scroll-top').click(function(){
    $('html,body').animate({scrollTop:0}, '500');
    return false;
})