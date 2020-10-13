document.getElementById("themeChangerLight").addEventListener("click", changeThemeLight);
document.getElementById("themeChangerDark").addEventListener("click", changeThemeDark);

function changeThemeLight() {
    document.getElementById("themeChangerLight").disabled = true;
    document.getElementById("themeChangerDark").disabled = false;
    document.getElementsByTagName("LINK")[3].href = "styles/lightTheme.css";

}

function changeThemeDark() {
    document.getElementById("themeChangerDark").disabled = true;
    document.getElementById("themeChangerLight").disabled = false;
    document.getElementsByTagName("LINK")[3].href = "styles/darkTheme.css";
}