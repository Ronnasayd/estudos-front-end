"use strict";

window.addEventListener("load", function () {
  var preview = document.getElementById("preview");
  var next = document.getElementById("next");
  var container = document.querySelector(".container");
  var active_class = 0;
  container.querySelectorAll("section")[active_class].classList.add("active");
  preview.addEventListener("click", function () {
    if (active_class === 0) {
      active_class = container.children.length - 1;
    } else {
      active_class -= 1;
    }

    console.log(active_class, container.children[active_class]);
    container.children[active_class].scrollIntoView({
      behavior: "smooth"
    });
  });
  next.addEventListener("click", function () {
    if (active_class === container.children.length - 1) {
      active_class = 0;
    } else {
      active_class += 1;
    }

    console.log(active_class, container.children[active_class]);
    container.children[active_class].scrollIntoView({
      behavior: "smooth"
    });
  });
});