setTimeout(function() { 
    $('.preloader').css('animation', 'fadeOut 0.3s ease-in-out')
    setTimeout(function() {
        $('.preloader').css('display', 'none')
    }, 300);
}, 1500);

$(function () {
	$('.tlt').textillate({
        selector: '.texts',
        loop: true,
        minDisplayTime: 1,
        autoStart: true,
        in: { 
            effect: 'bounceInLeft',
            delay: 20,
            reverse: true,
            callback: function () {}
        },
        out: {
            effect: 'bounceOutRight',
            delay: 20,
            reverse: true,
            callback: function () {}
        },
        callback: function () {},
        type: 'char'
    });
})

$(function () {
	$('.quate_area').textillate({
        selector: '.text',
        loop: true,
        minDisplayTime: 3,
        autoStart: true,
        in: { 
            effect: 'tada',
            delay: 50,
            sync: true,
            callback: function () {}
        },
        out: {
            effect: 'tada',
            delay: 30,
            shuffle: true,
            callback: function () {}
        },
        callback: function () {},
        type: 'char'
    });
})

$(function () {
	$('.blog_area').textillate({
        selector: '.text',
        loop: true,
        minDisplayTime: 5,
        autoStart: true,
        in: { 
            effect: 'flash',
            delay: 100,
            sequence: true,
            callback: function () {}
        },
        out: {
            effect: 'flash',
            delay: 100,
            sequence: true,
            callback: function () {}
        },
        callback: function () {},
        type: 'char'
    });
})