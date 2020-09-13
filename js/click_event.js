function fav(obj) {
    var index = obj.getAttribute("alt");
    var param = $.param({"id": index});
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8000/addFavorite?" + param,
        dataType: "json",
        success: function(response) {
            img_src = './img/favorite_icon.png';
            if(response.Favorite == 1) {
                img_src = './img/favorite_icon_red.png';
            }
            obj.src = img_src;
        }
    });
}

function del(obj) {
    var index = obj.getAttribute("alt");
    var param = $.param({"id": index});
    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8000/deleteImage?" + param,
        dataType: "json",
        success: function() {
            window.location.reload();
        }
    });
}

function loc(obj) {
    // find children class index
    var index;
    var allElements = document.getElementsByClassName("loc");
    for(var i = 0, len = allElements.length; i < len; i++) {
        if(allElements[i].alt == obj.getAttribute("alt")) {
            index = i;
            break;
        }
    }

    var id = obj.getAttribute("alt");
    var location = document.getElementsByClassName("loc")[index].value
    var param = $.param({
        "id": id,
        "location": location
    });

    $.ajax({
        type: "GET",
        url: "http://127.0.0.1:8000/addLocation?" + param,
        dataType: "json",
        success: function(response) {
            console.log(response);
        }
    });
}