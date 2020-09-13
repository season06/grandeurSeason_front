$(function () {
    $(window).scroll(function () {
        var height = window.innerHeight;
        var $menu = $('#menu');
        var $title = $('#img_title');
        var scrollVal = $(this).scrollTop();
        
        if (scrollVal > height) {
            $menu.css('position', 'fixed');
            $title.css('margin-top', '50px');
        } else {
            $menu.css('position', 'relative');
            $title.css('margin', '0px');
        }
    });
});