const ask = document.getElementById("ask");
const ans = document.getElementById("ans");
let init = 0;
const botSay = (data) => {
  return [
    "Halo, perkenalkan nama saya Revver Bot, siapa nama kamu?",
    `Halo ${data.nama}, berapa usia kamu?`,
    `Ohhhh ${data.usia}, hobi kamu apa ya?`,
    `Woww sama dong hobiku juga ${data.hobi}, btw kamu punya pacar ga?`,
    `Ohhhh ${data.pacar}, ya sudah kalau gitu, udahan ya?`,
  ];
};

ask.innerHTML = botSay()[0];

let userData = [];

function botStart() {
  init++;
  if (init === 1) {
    botDelay({ nama: jawaban.value });
  } else if (init === 2) {
    botDelay({ usia: jawaban.value });
  } else if (init === 3) {
    botDelay({ hobi: jawaban.value });
  } else if (init === 4) {
    botDelay({ pacar: jawaban.value });
  } else if (init === 5) {
    finishing();
  } else {
    botEnd();
  }
}

function botDelay(user) {
  setTimeout(() => {
    ask.innerHTML = botSay(user);
  }, [1500]);
}
function finishing() {
  ask.innerHTML = `Thanks ya sudah main ke Revver 😊`;
  ans.value = "";
}
function botEnd() {
  window.location.reload();
}
