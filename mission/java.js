const themeSelector = document.getElementById("mode");
const body = document.getElementById("body");
const img = document.getElementById("img");

function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add("dark");
        img.src = 'byui-logo_white.png';
    } else {
        body.classList.remove("dark");
        img.src = 'byui-logo_blue.webp';
    }
}
themeSelector.addEventListener("change", changeTheme)
console.log("Theme changed to", themeSelector.value);
