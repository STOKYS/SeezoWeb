document.getElementById("themeChanger").addEventListener("click", changeTheme);

let isDark = 1;

function changeTheme(){
    if (isDark == 1){
        isDark = 0;
        document.getElementById("themeChanger").innerText = "Dark";
        document.getElementsByTagName("LINK")[3].href = "styles/lightTheme.css";
    } else {
        isDark = 1;
        document.getElementById("themeChanger").innerText = "Light";
        document.getElementsByTagName("LINK")[3].href = "styles/darkTheme.css";
    }
}