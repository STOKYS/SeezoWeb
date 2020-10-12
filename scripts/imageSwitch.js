let arr = ["images/seezoWebsiteAlt.bmp","images/seezoProductionsAlt.bmp","images/seezoGameStudiosAlt.bmp","images/seezoSoftworksAlt.bmp","images/seezoArtStudiosAlt.bmp"]
let arrCol = ["#9A24E7", "#DFE700", "#E72522", "#6CE726", "#0C8FE7"]
let number = 0;
let oldDate = Math.floor(new Date() / 1000);

window.addEventListener("load", function(){
    document.getElementById("loadingImages").style.opacity = "1"
    setInterval(imageSwitch, 1000)
})

function imageSwitch(){
    newDate = Math.floor(new Date() / 1000)
    if (newDate - oldDate == 9){
        document.getElementById("loadingImages").style.opacity = 1;
        document.getElementById("loadingMore").style.color = arrCol[number]
        document.getElementById("loadingMore").style.borderColor = arrCol[number]
        oldDate = Math.floor(new Date() / 1000)
    } else if (newDate - oldDate == 8){
        if (number > 3){
            number = 0;
        } else {
            number++;
        }
        document.getElementById("loadingImages").src = arr[number]
    } else if (newDate - oldDate == 7){
        document.getElementById("loadingImages").style.opacity = 0;
    }
}

