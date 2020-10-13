const btn = document.getElementById("dropdownbtnimg")

document.getElementById("dropdownbtn").addEventListener("click", function(){
    if(btn.style.transform == 'rotate(0deg)'){
        btn.style.transform = 'rotate(-90deg)'
        document.getElementById("menu").style.display = "inline"
    } else if (btn.style.transform == 'rotate(-90deg)'){
        btn.style.transform = 'rotate(0deg)'
        document.getElementById("menu").style.display = "none"
    } else {
        btn.style.transform = 'rotate(-90deg)'
        document.getElementById("menu").style.display = "inline"
    }
})