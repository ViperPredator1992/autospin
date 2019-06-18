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
    
});