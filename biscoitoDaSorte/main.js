const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const cookieClick = document.querySelector("#cookieClick");
const btnReset = document.querySelector("#btnReset");
const fortuneMessage = document.querySelector("#fortuneMessage");

const fortunes = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "Se a vida te der limões faça uma limonada.",
  "Não importa o tamanho da montanha, ela não pode tapar o sol.",
];

let lastMessage = "";

const fortuneText = () => {
  let randomMessage = fortunes[Math.floor(Math.random() * fortunes.length)];
  while (randomMessage === lastMessage) {
    randomMessage = fortunes[Math.floor(Math.random() * fortunes.length)];
  }

  lastMessage = randomMessage;
  fortuneMessage.innerHTML = randomMessage;
  toggleScreen();
};

const toggleScreen = () => {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
};

cookieClick.addEventListener("click", event => {
  console.log(`${fortuneMessage}`);
  event.preventDefault();
  fortuneText();
});

btnReset.addEventListener("click", event => {
  event.preventDefault();
  toggleScreen();
});
