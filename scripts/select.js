const selected01 = document.getElementById("selected01")
const selected02 = document.getElementById("selected02")
const selected03 = document.getElementById("selected03")
const selected04 = document.getElementById("selected04")

document.getElementById("image01").addEventListener("click", function(){
    selected01.style.display = "inline"
    selected02.style.display = "none"
    selected03.style.display = "none"
    selected04.style.display = "none"
    document.getElementById("image01").style.filter = "contrast(100%)"
    document.getElementById("image02").style.filter = "contrast(20%)"
    document.getElementById("image03").style.filter = "contrast(20%)"
    document.getElementById("image04").style.filter = "contrast(20%)"
})

document.getElementById("image02").addEventListener("click", function(){
    selected01.style.display = "none"
    selected02.style.display = "inline"
    selected03.style.display = "none"
    selected04.style.display = "none"
    document.getElementById("image01").style.filter = "contrast(20%)"
    document.getElementById("image02").style.filter = "contrast(100%)"
    document.getElementById("image03").style.filter = "contrast(20%)"
    document.getElementById("image04").style.filter = "contrast(20%)"
})

document.getElementById("image03").addEventListener("click", function(){
    selected01.style.display = "none"
    selected02.style.display = "none"
    selected03.style.display = "inline"
    selected04.style.display = "none"
    document.getElementById("image01").style.filter = "contrast(20%)"
    document.getElementById("image02").style.filter = "contrast(20%)"
    document.getElementById("image03").style.filter = "contrast(100%)"
    document.getElementById("image04").style.filter = "contrast(20%)"
})

document.getElementById("image04").addEventListener("click", function(){
    selected01.style.display = "none"
    selected02.style.display = "none"
    selected03.style.display = "none"
    selected04.style.display = "inline"
    document.getElementById("image01").style.filter = "contrast(20%)"
    document.getElementById("image02").style.filter = "contrast(20%)"
    document.getElementById("image03").style.filter = "contrast(20%)"
    document.getElementById("image04").style.filter = "contrast(100%)"
})