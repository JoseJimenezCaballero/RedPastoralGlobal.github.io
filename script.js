
window.onload = adjust_carousel();

function adjust_carousel() {

  var T = document.getElementById("gg");
  var w1 = document.getElementById("we1");
  var w2 = document.getElementById("we2");
  var w3 = document.getElementById("we3");
  var N = document.getElementById("home");
  var navv = document.getElementById("navy");
  const collection = document.getElementsByClassName("form-control input_normal");

  if (window.innerWidth <= 1000) {
    T.style.width = "100%";
    T.style.marginLeft = "0vw";

    w1.style.height = "50vh";
    w2.style.height = "50vh";
    w3.style.height = "50vh";

    N.classList.remove("headerr");
    N.classList.add("mobile_header");

    navv.classList.remove("py-3")

    collection[0].classList.add("input_mobile");
    collection[1].classList.add("input_mobile");
    collection[2].classList.add("input_mobile");
    collection[3].classList.add("input_mobile");
    collection[4].classList.add("input_mobile");
  }

}