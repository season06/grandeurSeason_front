var height = window.innerHeight;
$(function () {
    $(window).scroll(function () {
        var $menu = $('#menu');
        var scrollVal = $(this).scrollTop();

        if (scrollVal > height) {
            $menu.css('position', 'fixed');
        } else {
            $menu.css('position', 'relative');
        }
    });
});