document.getElementById("photo_area").addEventListener("click", function(element){
    var target = element.target;
    var src = target.getAttribute("src");
    BigImg(src);
});
function BigImg(src) {
    var tempContainer = $("<div class=tempContainer></div>");

    with(tempContainer) {
        appendTo("body"); 
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
        var orignImg = new Image();
        orignImg.src = src;
    
        orignImg.onload = function() {
            var img_width = orignImg.width;
            var img_height = orignImg.height;
            if (img_width > windowWidth || img_height > windowHeight) {
                if (img_height > windowHeight) {
                    var _time = img_height/windowHeight;
                    img_width = img_width/_time;
                    img_height = img_height/_time;
                } else {
                    var _time = img_width/windowWidth;
                    img_width = img_width/_time;
                    img_height = img_height/_time;
                }
            }
            css("top", 0);
            html("<img src=" + src + " width=" + img_width + " height=" + img_height + ";>");
        }
    }
    $(".tempContainer").click(function () {
        $(".tempContainer").remove();
    });
}