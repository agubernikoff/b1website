const shimg1 = document.querySelector(".image1");
const shgif = document.querySelector(".gif");
const shimg2 = document.querySelector(".image2");
const sh1 = document.querySelector(".heezy");
const spew = document.querySelector(".for-now");

const start = function () {
  shimg1.classList.add("hidden");
  shgif.classList.remove("hidden");
  sh1.innerHTML = "WHEN ANIMATION STOPS CLICK THE IMAGE TO ENTER";
};
const start2 = function () {
  shgif.classList.add("fade");
  //shimg2.classList.remove("hidden");
  sh1.classList.add("tran");
  sh1.innerHTML = "WELCOME";
  spew.classList.remove("unavailable");
};
/*const start3 = function () {
  shgif.classList.add("fade");
  sh1.classList.add("tran");
  sh1.innerHTML = "WELCOME";
};*/
shimg1.addEventListener("click", function () {
  start();
});
shgif.addEventListener("click", function () {
  start2();
});
//document.addEventListener("click", function () {
//  start3();
//});
