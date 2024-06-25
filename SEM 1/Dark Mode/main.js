let body = document.body;
const info = document.getElementById("info");
const mode = document.getElementById("mode");
const home = document.getElementById("home");
const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

function darkMode() {
  if (darkRemainingLeft == 1) {
    info.innerText = "💥Jatah DarkMode Anda Telah Habis💥";
    mode.style.display = "none";
    home.innerText = "RESTART";
    return;
  }
  darkCounter += 1;
  darkRemainingLeft = darkLimit - darkCounter;
  info.innerText = `DarkMode Yang Telah Anda Klik: ${darkCounter}x, tersisa: ${darkRemainingLeft}x`;

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    mode.innerText = "Light Mode";
  } else {
    mode.innerText = "Dark Mode";
  }
}
function reRender() {
  location.reload();
}
