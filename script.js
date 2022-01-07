const shimg1 = document.querySelector(".image1");
const shgif = document.querySelector(".gif");
const sh1 = document.querySelector(".heezy");
const spew = document.querySelector(".for-now");
const link = document.querySelector(".links");
const greeting = [
  "CLICK THE IMAGE TO BEGIN",
  "WHEN THE ANIMATION STOPS CLICK THE IMAGE TO ENTER",
  "WELCOME",
];

sh1.innerHTML = greeting[0];

const start = function () {
  shimg1.classList.add("hidden");
  shgif.classList.remove("hidden");
  sh1.innerHTML = greeting[1];
};
const start2 = function () {
  shgif.classList.add("fade");
  sh1.classList.add("tran");
  sh1.innerHTML = greeting[2];
  spew.classList.remove("unavailable");
  link.classList.remove("hidden");
};
shimg1.addEventListener("click", function () {
  start();
});
shgif.addEventListener("click", function () {
  start2();
});
