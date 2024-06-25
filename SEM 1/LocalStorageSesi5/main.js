let usernameInput = document.getElementById("usernameInput");
let passwordInput = document.getElementById("passwordInput");
let admin = document.getElementById("admin");
let basic = document.getElementById("basic");
let loginBtn = document.getElementById("loginBtn");
let logoutBtn = document.getElementById("logoutBtn");

basic.style.display = "none";
admin.style.display = "none";
logoutBtn.style.display = "none";

const onLogin = () => {
  localStorage.setItem("username", usernameInput.value);

  if (usernameInput.value == "admin" && passwordInput.value == "admin123") {
    alert("Login sebagai Admin");
    localStorage.setItem("role", "admin");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginBtn.style.display = "none";
    basic.style.display = "none";
    admin.style.display = "block";
    logoutBtn.style.display = "block";
  } else {
    alert("Login sebagai Basic User");
    localStorage.setItem("role", "basic");
    usernameInput.style.display = "none";
    passwordInput.style.display = "none";
    loginBtn.style.display = "none";
    admin.style.display = "none";
    basic.style.display = "block";
    logoutBtn.style.display = "block";
  }
};
if (localStorage.getItem("username")) {
  usernameInput.style.display = "none";
  passwordInput.style.display = "none";
  loginBtn.style.display = "none";
  logoutBtn.style.display = "block";
  if (localStorage.getItem("role") == "admin") {
    basic.style.display = "none";
    admin.style.display = "block";
  } else {
    admin.style.display = "none";
    basic.style.display = "block";
  }
}
const onLogout = () => {
  localStorage.clear();
  location.reload();
};
