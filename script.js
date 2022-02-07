const shimg1 = document.querySelector(".image1");
const shgif = document.querySelector(".gif");
const sh1 = document.querySelector(".heezy");
const spew = document.querySelector(".for-now");
const link = document.querySelector(".links");
const btn = document.querySelector("button");
const ifYou = document.querySelector(".ifYou");
const apology = document.querySelector(".apology");
const greeting = [
  "CLICK THE IMAGE TO BEGIN",
  "WHEN THE ANIMATION STOPS CLICK THE IMAGE TO ENTER",
  "WELCOME",
];

sh1.innerText = greeting[0];

const start = function () {
  shimg1.classList.add("hidden");
  shgif.classList.remove("hidden");
  sh1.innerText = greeting[1];
};
const start2 = function () {
  shgif.classList.add("fade");
  sh1.classList.add("tran");
  sh1.innerText = greeting[2];
  spew.classList.remove("unavailable");
  link.classList.remove("hidden");
  btn.removeAttribute("hidden");
};
shimg1.addEventListener("click", function () {
  start();
});
shgif.addEventListener("click", function () {
  start2();
});
document.body.onkeydown = function (e) {
  if (e.keyCode == 32) {
    document.body.classList.toggle("space");
    if (btn.innerText === "Press Me!") {
      btn.innerText = "Press Me...in space!!";
    } else {
      btn.innerText = "Press Me!";
    }
    ifYou.classList.toggle("hidden");
    if (Boolean(apology.classList.contains("hidden")) === false) {
      apology.classList.add("hidden");
    }
  }
};
ifYou.addEventListener("mouseover", function () {
  apology.classList.remove("hidden");
});
