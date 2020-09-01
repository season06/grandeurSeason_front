var cn = new CanvasNest(document.getElementById('area-render'), {
    color: '255,0,255',
    count: 50,
});

function asyncLoad() {
    var i = document.createElement("iframe");
    i.src = "https://ghbtns.com/github-btn.html?user=hustcc&repo=canvas-nest.js&type=star&count=true";
    i.scrolling = "no";
    i.frameborder = "0";
    i.border = "0";
    i.setAttribute("frameborder", "0", 0);
    i.width = "100px";
    i.height = "20px";
    document.getElementById("github-iframe").appendChild(i);
}

function loadGitHubBtn() {
    if (window.addEventListener) {
        window.addEventListener("load", asyncLoad, false);
    } else if (window.attachEvent) {
        window.attachEvent("onload", asyncLoad);
    } else {
        window.onload = asyncLoad;
    }
}

loadGitHubBtn();