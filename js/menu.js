$(function () {
    $(window).scroll(function () {
        var height = window.innerHeight;
        var $menu = $('#menu');
        var $post = $('.new_post');
        var scrollVal = $(this).scrollTop();
        
        if (scrollVal > height) {
            $menu.css('position', 'fixed');
            $post.css('margin-top', '50px');
        } else {
            $menu.css('position', 'relative');
            $post.css('margin', '0px');
        }
    });
});