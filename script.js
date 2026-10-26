function upDate(previewPic) {
    console.log("Mouseover event triggered");
    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    
    var captionDiv = document.getElementById("caption");
    captionDiv.innerHTML = previewPic.alt;
}

function unDo() {
    var imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    
    var captionDiv = document.getElementById("caption");
    captionDiv.innerHTML = "Hover over an image below to display here.";
}