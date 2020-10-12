window.addEventListener("load", function(){
    document.getElementById("mainPart").style.display = "none"
})

num01 = 0; 

document.getElementById("loadingContinue").addEventListener('click', function () {
    startDate = new Date()
    document.getElementById("mainPart").style.display = "inline"
    window.scrollTo({
        top: 946,
        behavior: 'smooth',
    })
    setInterval(function(){
        num01++
        if (num01 == 1){
            document.getElementById("loading").style.display = "none"
            window.scrollTo({
                top: -946,
                behavior: 'auto',
            })
            clearInterval()
        }
    }, 1000)
})