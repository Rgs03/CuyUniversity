let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let savebutton = document.getElementById("saveButton");

function generatePassword(len) {
  const lowerAlphabet = "abcdefghijklmnoprstuvwxyz";
  const upperAlphabet = lowerAlphabet.toUpperCase();
  const numeric = "0123456789";
  const symbol = `!@#$%^&*()_+{}[]-=';:?/.,<>`;

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  console.log("generator", generator);
  return generator;
}

function getPassword() {
  const newPassword = generatePassword(passwordLength.value);
  password.value = newPassword;
}

function savePassword() {
  document.title = password.value;
  savebutton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent("password saya: " + password.value)
  );
  savebutton.setAttribute("download", "MyPasswordGeneratorLOG.txt");
  setTimeout(() => {
    alert("berhasil disimpan");
  }, 1000);
}
