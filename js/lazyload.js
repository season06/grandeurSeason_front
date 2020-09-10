function lazyload(response) {
    const photo_area = document.querySelector('#photo_area');
    const end = document.querySelector('#end');

    let image_num = 0;
    const appendImage = () => {
        var oBox = $('<div>').addClass('photo_box').appendTo("#photo_area");
        
        $('<img>').attr('class','lazyload').attr('src', response[image_num].Image_url).appendTo($(oBox));
        var oSpan = $('<span>').attr('id','location').attr('class','animated fadeInDown')
        $('<span>').attr('class','badge badge-pill badge-dark').text("location").appendTo($(oSpan));
        
        var oIcon1
        if(response[image_num].Favorite == 0) {
            oIcon1 = $('<img>').attr('onclick','fav(this)').attr('id','favorite').attr('class','animated fadeInLeft').attr('alt', response[image_num].Id).attr('src', './img/favorite_icon.png')
        } else {
            oIcon1 = $('<img>').attr('onclick','fav(this)').attr('id','favorite').attr('class','animated fadeInLeft').attr('alt', response[image_num].Id).attr('src', './img/favorite_icon_red.png')
        }
        var oIcon2 = $('<img>').attr('onclick','del(this)').attr('id','delete').attr('class','animated fadeInRight').attr('alt', response[image_num].Id).attr('src', './img/delete_icon.png')

        $(oBox).append(oSpan,oIcon1, oIcon2);

        image_num++;
    }

    const loadImage = () => {
        for (let i = 0; i < 6; i++) {
            appendImage();
        }
    };

    const callback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (image_num < response.length) {
                    loadImage();        
                } else {
                    observer.unobserve(end);
                }
            }
        });
    }

    const options = {
        threshold: 0,
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(end);
    loadImage()
}

