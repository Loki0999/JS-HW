function upDate(previewPic) {
    console.log("Mouseover event triggered");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

function upLoad() {
    console.log("Window loaded successfully");
    
    var images = document.querySelectorAll(".preview");
    for (var i = 0; i < images.length; i++) {
        console.log("Tabindex added to image " + (i + 1));
        images[i].setAttribute("tabindex", "0");
    }
}

window.onload = upLoad;