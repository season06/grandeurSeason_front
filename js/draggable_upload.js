if (window.File && window.FileList && window.FileReader) {
    Init();
}

// getElementById
function $id(id) {
    return document.getElementById(id);
}

function Init() {
    var fileselect = $id("fileselect"),
        filedrag = $id("filedrag");

    // file select
    fileselect.addEventListener("change", FileSelectHandler, false);

    // is XHR2 available?
    var xhr = new XMLHttpRequest();
    if (xhr.upload) {
        // file drop
        filedrag.addEventListener("dragover", FileDragHover, false);
        filedrag.addEventListener("dragleave", FileDragHover, false);
        filedrag.addEventListener("drop", FileSelectHandler, false);
        filedrag.style.display = "block";
    }
}		

// file drag hover
function FileDragHover(e) {
    e.stopPropagation();
    e.preventDefault();
    e.target.className = (e.type == "dragover" ? "hover" : "");
}

// file selection
function FileSelectHandler(e) {
    // cancel event and hover styling
    FileDragHover(e);

    // fetch FileList object
    var files = e.target.files || e.dataTransfer.files;

    var json_arr = [];
    // process all File objects
    for (var i = 0, file; file = files[i]; i++) {
        var json = {
            "name": file.name,
            "image_url": baseRoot + file.name,
            "type": file.type,
            "tag": tag_id,
        }
        json_arr.push(json);
    }
    console.log(json_arr);
    upload_file(json_arr);
}

function upload_file(data) {
    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://127.0.0.1:8000/createImage",
        data: JSON.stringify(data),
        dataType: "json",
        success: function(response) {
            alert(response)
        },
        error: function(){
            alert("error");
        }
    });
}