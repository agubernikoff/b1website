const shimg1 = document.querySelector(".image1");
const shgif = document.querySelector(".gif");
const sh1 = document.querySelector(".heezy");
const spew = document.querySelector(".for-now");
const link = document.querySelector(".links");
const btn = document.querySelector("button");
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
  const btn = document.querySelector("button");
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
    if (btn.innerHTML === "Press Me!") {
      btn.innerHTML = "Press Me...in space!!";
    } else {
      btn.innerHTML = "Press Me!";
    }
  }
};
/*function alertMsg() {
  alert("Thanks for pressing me!");
  btn.innerHTML = "I have been pressed!";
}*/
