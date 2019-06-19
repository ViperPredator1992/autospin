$(document).ready(function () {
   
    $('.burger').click(function () {
        if ($('.menu-list').css('display') == 'none') {
            $('.menu-list').slideDown();
            $('.burger').addClass('burger-open');
        } else {
            $('.menu-list').slideUp();
            $('.burger').removeClass('burger-open');
        }
    });

    $('.navbar__text, .nav-icon-1').click(function () {
        if ($('.navbar-list').css('display') == 'none') {
            $('.navbar-list').slideDown();
            $('.icon').addClass('open');
        } else {
            $('.navbar-list').slideUp();
            $('.icon').removeClass('open');
        }
    });
    
});